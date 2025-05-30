import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
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
        // grab the default rule for handling all images
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));

        config.module.rules = [
            // keep all rules except the default image loader rule
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...config.module.rules.filter((rule: any) => rule !== fileLoaderRule),

            // re-add the default image loader rule, but exclude svg
            {
                ...fileLoaderRule,
                exclude: /\.svg$/i,
            },

            // add a new rule for svg files, excluding svg files that are imported as React components
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: {
                    ...fileLoaderRule.resourceQuery,
                    not: [
                        ...fileLoaderRule.resourceQuery.not,
                        /component/, // *.svg?component
                    ],
                },
            },

            // add a new rule for svg files that are imported as React components
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: "@svgr/webpack",
                resourceQuery: /component/, // *.svg?component
            },
        ];

        return config;
    },
    transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
