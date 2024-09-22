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

## considerations around the code execution

### user provided code might throw errors and cause our program to crash .

### user-provided code might mutate the DOM, causing our program to crash .

### A user might accidentally run the code provided by another malicious user .

### cookies are used for the authentication in many different places .

## Iframes need to be explored

### Direct access between frames is allowed when

### the iframe elemnent does not have a sandbox property or has a sandbox=allow same-origin" property

## AND

### we fetch the parent HTML doc and the frame HTML doc from the exact same .

### Domain

### Port

### Protocol

### to disallow the cross-frame access the iframe content should be loaded from different domain or port

### direct access between the frames is allowed when the iframe element does not have a sandbox property or has a sandbox="allow-same-origin" property .

### and we fetch the parent HTML doc and frame HTML doc from the exact same .

### 1.Domain 2.Port 3.protocol
