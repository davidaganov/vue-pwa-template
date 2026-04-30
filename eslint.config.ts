import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript"
import configPrettier from "eslint-config-prettier"
import pluginPrettier from "eslint-plugin-prettier"
import pluginVue from "eslint-plugin-vue"
import { globalIgnores } from "eslint/config"

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{vue,ts,mts,tsx}"]
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**", "**/node_modules/**"]),

  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  skipFormatting,
  configPrettier,

  {
    plugins: {
      prettier: pluginPrettier
    }
  },

  {
    name: "app/vue-rules",
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",
      "vue/valid-v-slot": ["error", { allowModifiers: true }],
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/no-v-html": "off",
      "vue/block-order": ["error", { order: ["script", "template", "style"] }],
      "vue/define-emits-declaration": ["error", "type-literal"],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/require-typed-ref": "error"
    }
  },

  {
    name: "app/prettier",
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }]
    }
  },

  {
    name: "app/typescript-rules",
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "off"
    }
  }
)
