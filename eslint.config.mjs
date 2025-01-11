import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
{
  ignores: ['node_moules', 'dist']
},
{
  languageOptions: {
    globals: {
     ...globals.browser,
     ...globals.es2025
    }
  }
},
  pluginJs.configs.recommended,
];