import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "unsplash.com",
                pathname: "/**",
            },
        ],
    },
    /* other config options here */
};

export default nextConfig;
