### 🚀 Just built a simple React app that integrates esbuild-wasm to transpile JSX to ES2015 in the browser!

### 🛠️ It's a quick demo of how to use esbuild for fast and efficient code transformations on the client side.

### using the command npm view react dist.tarball you can see the react package file which consists of bundles .

### unpkg is a fast, global content delivery network for everything on npm. Use it to quickly and easily load any file from any package using a URL like

### only by implementing the onResolve and onLoad we can able to test esbuild .

### Implementing the caching layer .

### localforage uses localstorage in the browsers with no INDEXDB or WEBSQL Support

### we can try to load the css files on the ui which we have created .

### Example: import 'bulma/css/bulma.css';

### underhood how the css file get loaded

+-------------------------+ +---------------------+
| Source Files | | esbuild Config |
| | | |
| - index.js | -------->| - Entry points |
| - style.css | | - Plugins (optional)|
+-------------------------+ +---------------------+
|
v
+-------------------------+ +---------------------+
| esbuild Compiler | | Plugins (optional) |
| | | - PostCSS, SCSS, etc.|
| - Resolves Imports | <--------| |
| - Bundles CSS & JS | +---------------------+
+-------------------------+
|
v
+-------------------------+ +---------------------+
| Output Bundles | | Browser |
| | | |
| - app.js | -------->| - Loads CSS from |
| - style.css (optional) | | bundle |
+-------------------------+ +---------------------+
