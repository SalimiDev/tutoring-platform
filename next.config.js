/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.classbon.com',
            },
        ],
    },
    experimental: {
        forceSwcTransforms: true,
    },
};

module.exports = nextConfig;
