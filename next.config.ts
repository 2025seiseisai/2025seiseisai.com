import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/2025",
    assetPrefix: "/2025",
    output: "export",
    experimental: {
        viewTransition: true,
        reactCompiler: true,
    },
    sassOptions: {
        additionalData: `@use "@/impl/_global.scss" as *;`,
    },
    images: {
        loader: "custom",
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
        nextImageExportOptimizer_imageFolderPath: "public/image",
        nextImageExportOptimizer_exportFolderPath: "out",
        nextImageExportOptimizer_quality: "75",
        nextImageExportOptimizer_storePicturesInWEBP: "true",
        nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
        nextImageExportOptimizer_generateAndUseBlurImages: "true",
        nextImageExportOptimizer_remoteImageCacheTTL: "0",
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
        // @ts-expect-error private property access
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));
        config.module.rules.push(
            { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
                use: ["@svgr/webpack"],
            },
        );
        fileLoaderRule.exclude = /\.svg$/i;
        return config;
    },
};

export default nextConfig;
