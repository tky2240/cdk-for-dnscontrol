import { defineConfig } from "eslint/config";
import tseslint from 'typescript-eslint';

export default defineConfig(
	{
		files: ["**/*.ts"],
    ignores: ["**/*.{js,d.ts}"],
		extends: [
			...tseslint.configs.strict,
			...tseslint.configs.stylistic
		],
		rules: {
			"@typescript-eslint/consistent-type-definitions": "off",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": ["error"]
		}
	},
);