# poc-js
Basic test of writing javascript for the web

## Babel

### Babel installation

```sh
npm install babel-cli babel-preset-env --save-dev
```

### Babel configuration

Then create `.babelrc` file with following lines for configuration

```json
{
  "presets": ["env"]
}
```

### Babel usage

Then, following command to generate new js file for transpiling

```sh
npx babel scripts.js --out-file scripts.babel.js
```

If there is an error with `async/await` functions, the solution might be found in **`babel-polyfill`**

Adding following line to `index.html` before previous script tag

```html
<script src="./node_modules/babel-polyfill/browser.js"></script>
```

## Gulp

### Gulp installation

```sh
npm install -g gulp-cli
npm install --save-dev gulp
```

### Gulp configuration (gulpfile)

Create new file `gulpfile.js` and then create a task using `gulp` module

Then, following command to run the task (here task name is *`processHTML`*)
```sh
gulp processHTML
```

Which creates a new `dist` folder containing the `index.html` file
