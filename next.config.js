/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    output: 'export',
    distDir: "_static",
    images: {
        domains: ['images.unsplash.com', 'assets.aceternity.com', 'pbs.twimg.com','cloud.limelight.sh'],
      },
}

module.exports = nextConfig
