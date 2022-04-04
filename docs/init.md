# Vuestic Project Creation
Instrucciones de la creación, inicialización y configuración del proyecto con sus dependencias y plugins.

## Initializing the project

Initialize a new project:

	yarn init

Add this preset to Vue Cli's `.vuerc` file, inside `"presets"`:

```json
"Vuestic Vue3 Prettier": {
  "useConfigFiles": true,
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-router": {
      "historyMode": true
    },
    "@vue/cli-plugin-eslint": {
      "config": "prettier",
      "lintOn": [
        "save"
      ]
    }
  },
  "vueVersion": "3",
  "cssPreprocessor": "dart-sass"
}
```
Create a new Vue project using this preset:

	vue create .

Add Vuestic to the project:

	yarn add vuestic-ui

Add CSS assets used by Vuestic to the `<head>` of `public/index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap"
  rel="stylesheet"
>
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
>
```
Add Vuestic Plugin and styles to your project's entry point:
```javascript
import { createApp } from "vue"
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import App from "./App.vue"

const app = createApp(App)
app.use(VuesticPlugin)
app.mount("#app")
```

## Installing PUG

Install `pug` and `pug-plain-loader`:

	yarn add -D pug-plain-loader pug

Add it to webpack in your `vue.config.js`:

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,

  chainWebpack: (config) => {
    // PUG Plain Loader
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
  },
})
```
Install the Vue Pug SFC Linter Plugin:

	yarn add -D eslint-plugin-vue-pug-sfc


## Config ESLint and Prettier

Set the Vue 3 presets in `.eslintrc.js` as well as the `prettier` and Pug plugins:

```javascript
extends: [
  "eslint:recommended",
  "plugin:vue/vue3-essential",
  "plugin:vue-pug-sfc/essential",
  "prettier",
],
```

Create a `.prettierrc.json` with the desired prettier rules:

```json
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```

