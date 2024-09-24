
# 🚀 React App with `esbuild-wasm` Integration for Client-Side JSX to ES2015 Transpilation

This project demonstrates how to integrate `esbuild-wasm` to efficiently transpile JSX into ES2015 directly in the browser. It's a simple yet powerful demo of how to leverage `esbuild` for fast code transformations on the client side.

## Key Features

- **Client-side JSX Transpilation**: Utilizing `esbuild-wasm`, JSX is converted to ES2015 code directly in the browser.
- **Fast and Efficient Code Transformations**: With `esbuild`, transformations are quick and optimized for performance.
- **On-the-fly CSS Loading**: CSS files like Bulma can be imported dynamically.

## Installation & Setup

To install and view the React package file, you can run the following command:

```bash
npm view react dist.tarball
```

To quickly load any file from npm packages, you can also use [unpkg](https://unpkg.com). It’s a fast, global content delivery network (CDN) for everything on npm. Example:

```html
<link rel="stylesheet" href="https://unpkg.com/bulma/css/bulma.css">
```

## esbuild Integration

### `onResolve` and `onLoad` Methods

The core of testing `esbuild` relies on implementing the following methods:

- **`onResolve`**: Resolves the paths of the modules.
- **`onLoad`**: Loads the content of the resolved files.

These methods enable us to load and transform the code dynamically in the browser.

### Caching with `localforage`

We implemented a caching layer using `localforage`, which allows us to store resources in the browser’s `localStorage`. For browsers that don't support `IndexedDB` or `WebSQL`, `localforage` seamlessly falls back to `localStorage`.

## CSS Loading Example

You can load CSS files dynamically in the browser as shown below:

```javascript
import 'bulma/css/bulma.css';
```

The `esbuild` package can handle these CSS imports, and the styles are applied directly to the UI.

## Code Execution Considerations

When working with user-provided code, there are several risks to be aware of:

1. **Errors and Crashes**: User-provided code might throw errors, causing the app to crash.
2. **DOM Manipulation**: Malicious or erroneous code may mutate the DOM, leading to unpredictable behavior or crashes.
3. **Security**: User-provided code could be malicious. Always validate and sanitize user input to prevent security risks like cross-site scripting (XSS).

Cookies are often used for authentication in various parts of web applications, so ensure proper security measures are taken when handling cookies.

## Exploring `iframe` Security

Iframes allow embedding of other documents into the parent page, but there are important security considerations to prevent cross-frame access:

### Allowing Cross-Frame Access

Direct access between frames is allowed when:

1. The iframe element **does not have** a `sandbox` property or has a `sandbox="allow-same-origin"` property.
2. The parent HTML document and the iframe HTML document are fetched from the **exact same**:
   - Domain
   - Port
   - Protocol

### Disallowing Cross-Frame Access

To block cross-frame access, the iframe content should be loaded from a **different** domain, port, or protocol. This can be done by setting the `sandbox` attribute properly on the iframe element.

Example:

```html
<iframe src="https://example.com" sandbox="allow-scripts"></iframe>
```

---

This README provides an overview of the functionality, security considerations, and esbuild integration details. Feel free to explore further and enhance the project with more features!
