import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    turbopack: {
        rules: {
            "*.svg": {
                loaders: [{ loader: "@svgr/webpack", options: { dimensions: false } }],
                as: "*.js",
            },
        },
    },
    webpack: (config) => {
        // Add rule for SVG files
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack", options: { dimensions: false } }],
        });
        return config;
    },
    transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
