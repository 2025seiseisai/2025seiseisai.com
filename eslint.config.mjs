import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import reactCompiler from "eslint-plugin-react-compiler";
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
            "better-tailwindcss": eslintPluginBetterTailwindcss,
        },
        rules: {
            ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
            ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,
            "better-tailwindcss/no-unnecessary-whitespace": "off",
            "better-tailwindcss/multiline": "off",
        },
        settings: {
            "better-tailwindcss": {
                printWidth: 120,
                indent: 4,
                entryPoint: "src/impl/global.css",
            },
        },
    },
    reactCompiler.configs.recommended,
];

export default eslintConfig;
