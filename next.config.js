/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    output: 'export',
    distDir: "_static",
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
