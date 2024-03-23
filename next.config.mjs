/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { 
                hostname: 'utfs.io',
            },
            // Add additional patterns for other domains if necessary
        ],
    }
};

export default nextConfig;
