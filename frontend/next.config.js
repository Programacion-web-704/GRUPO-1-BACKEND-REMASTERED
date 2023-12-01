/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js

module.exports = {
    async rewrites() {
        return [
            {
                source: '/login.js',
                destination: '/',
            },
        ];
    },
};
