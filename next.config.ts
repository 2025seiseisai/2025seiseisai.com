import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    sassOptions: {
        additionalData: `@use "@/impl/_global" as *;`,
    },
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
    webpack: (config) => {
        // Add rule for SVG files
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack" }],
        });
        return config;
    },
    transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
