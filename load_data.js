const fs = require('fs');
const csv = require('csv-parser');
const { Client } = require('pg');

// Simple logging to confirm script is running
console.log('🚀 Starting CSV import...');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'pguser',
  password: 'pgpass',
  database: 'parkguard'
});

async function loadData() {
  try {
    console.log('🔌 Connecting to database...');
    await client.connect();
    console.log('✅ Connected to PostGIS');

    const results = [];
    const csvPath = './data/sf_parking.csv';

    // Check if file exists
    if (!fs.existsSync(csvPath)) {
      throw new Error(`❌ CSV file not found at: ${csvPath}`);
    }

    console.log('📂 Reading CSV file...');

    // Read CSV
    await new Promise((resolve, reject) => {
      fs.createReadStream(csvPath)
        .on('error', (err) => {
          reject(new Error(`Failed to open CSV: ${err.message}`));
        })
        .pipe(csv())
        .on('data', (row) => {
          results.push(row);
        })
        .on('end', () => {
          console.log(`📦 Loaded ${results.length} rows from CSV`);
          resolve();
        })
        .on('error', reject);
    });

    if (results.length === 0) {
      throw new Error('CSV is empty or could not be parsed');
    }

    let inserted = 0;
    let skipped = 0;

    for (let i = 0; i < results.length; i++) {
      const row = results[i];

      // Generate random SF coordinates for MVP
      const lng = -122.4194 + (Math.random() - 0.5) * 0.02;
      const lat = 37.7749 + (Math.random() - 0.5) * 0.02;

      try {
        const query = `
          INSERT INTO parking_rules (
            block_id, street_name, from_address, to_address, side_of_street, direction,
            zone_color, restriction_type, time_range, days_active, meter_rate,
            meter_hours, time_limit, street_cleaning_day, street_cleaning_time,
            effective_dates, latitude, longitude
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
        `;

        const values = [
          row.block_id || null,
          row.street_name || null,
          row.from_address || null,
          row.to_address || null,
          row.side_of_street || null,
          row.direction || null,
          row.zone_color || null,
          row.restriction_type || null,
          row.time_range || null,
          row.days_active ? String(row.days_active).split(',').map(s => s.trim()) : [],
          row.meter_rate || null,
          row.meter_hours || null,
          row.time_limit || null,
          row.street_cleaning_day || null,
          row.street_cleaning_time || null,
          row.effective_dates || null,
          lat,
          lng
        ];

        await client.query(query, values);
        inserted++;

        if (inserted % 500 === 0) {
          console.log(`↪️  Inserted ${inserted} rows...`);
        }

      } catch (rowErr) {
        console.warn(`⚠️ Skipping row ${i + 1}:`, rowErr.message);
        skipped++;
        continue;
      }
    }

    console.log(`✅ SUCCESS: Inserted ${inserted} rows`);
    console.log(`⚠️ Skipped: ${skipped} rows`);
    await client.end();
    console.log('🔌 Database connection closed');

  } catch (err) {
    console.error('❌ FATAL ERROR:', err.message);
    try {
      await client.end();
    } catch (e) {}
    process.exit(1);
  }
}

// Start the process
loadData();