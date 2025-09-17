const fs = require('fs');
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'pguser',
  password: 'pgpass',
  database: 'parkguard'
});

async function loadData() {
  try {
    await client.connect();
    console.log('✅ Connected to PostGIS');

    const rawData = fs.readFileSync('./data/sf_parking.geojson', 'utf8');
    const data = JSON.parse(rawData);

    if (!data.features || !Array.isArray(data.features)) {
      throw new Error('GeoJSON format invalid: no features array found');
    }

    console.log(`📦 Found ${data.features.length} features`);

    let inserted = 0;
    let skipped = 0;

    for (let i = 0; i < data.features.length; i++) {
      const feature = data.features[i];
      const props = feature.properties || {};
      const geom = feature.geometry;

      // 🛑 EARLY EXIT: Skip if geometry is missing or not LineString
      if (!geom || geom.type !== 'LineString') {
        skipped++;
        continue;
      }

      // 🛑 EXTRA DEFENSE: Skip if coordinates is missing or not array
      if (!geom.coordinates || !Array.isArray(geom.coordinates)) {
        console.warn(`⚠️ Feature ${i}: Invalid coordinates`, geom);
        skipped++;
        continue;
      }

      try {
        // ✅ Now safe to map
        const coords = geom.coordinates.map(c => {
          if (!Array.isArray(c) || c.length < 2) {
            throw new Error('Invalid coordinate pair');
          }
          return `${c[0]} ${c[1]}`;
        }).join(', ');

        const wkt = `LINESTRING(${coords})`;

        const query = `
          INSERT INTO parking_rules (
            block_id, street_name, from_address, to_address, side_of_street, direction,
            zone_color, restriction_type, time_range, days_active, meter_rate,
            meter_hours, time_limit, street_cleaning_day, street_cleaning_time,
            effective_dates, geom
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, ST_GeomFromText($17, 4326))
        `;

        const values = [
          props.block_id || null,
          props.street_name || null,
          props.from_address || null,
          props.to_address || null,
          props.side_of_street || null,
          props.direction || null,
          props.zone_color || null,
          props.restriction_type || null,
          props.time_range || null,
          props.days_active ? String(props.days_active).split(',') : [],
          props.meter_rate || null,
          props.meter_hours || null,
          props.time_limit || null,
          props.street_cleaning_day || null,
          props.street_cleaning_time || null,
          props.effective_dates || null,
          wkt
        ];

        await client.query(query, values);
        inserted++;
      } catch (rowErr) {
        console.warn(`⚠️ Skipping feature ${i} due to error:`, rowErr.message);
        skipped++;
      }
    }

    console.log(`✅ Inserted: ${inserted} rules`);
    console.log(`⚠️ Skipped: ${skipped} features`);
    await client.end();
    console.log('🔌 Database connection closed');
  } catch (err) {
    console.error('❌ FATAL ERROR:', err.message);
    process.exit(1);
  }
}

loadData();