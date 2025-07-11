import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    basePath: "/2025",
    assetPrefix: "/2025",
    experimental: {
        viewTransition: true,
        reactCompiler: true,
    },
    sassOptions: {
        additionalData: `@use "@/impl/_global.scss" as *;`,
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
        // Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files
        // into React components. See https://react-svgr.com/docs/next/

        // Grab the existing rule that handles SVG imports
        // @ts-expect-error - this is a private property that is not typed
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: {
                    not: [...fileLoaderRule.resourceQuery.not, /url/],
                }, // exclude if *.svg?url
                use: ["@svgr/webpack"],
            },
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
    transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
