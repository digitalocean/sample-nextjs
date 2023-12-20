/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    trailingSlash: true,
    output: 'export',
    distDir: "_static",
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig