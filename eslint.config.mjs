import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        files: ["**/*.{jsx,tsx}"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "readable-tailwind": eslintPluginReadableTailwind,
        },
        rules: {
            ...eslintPluginReadableTailwind.configs.warning.rules,
            ...eslintPluginReadableTailwind.configs.error.rules,
            "readable-tailwind/multiline": "off",
        },
        settings: {
            "readable-tailwind": {
                entryPoint: "src/impl/global.css",
            },
        },
    },
];

export default eslintConfig;
