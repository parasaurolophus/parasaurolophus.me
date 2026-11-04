Copyright &copy; 2026 Kirk Rader

# parasaurolophus.me

## Dependencies / Attributions

_See [./package-lock.json](./package-lock.json) for the complete set of
transitive dependencies._

* [NodeJS]
* [@highlightjs/vue-plugin]
* [@mdi/js]
* [highlight.js]
* [qr]
* [vue]
* [vue-router]
* [xml-formatter]

## Installation

Assuming [git] and [NodeJS] are properly installed and configured:

```bash
git clone https://github.com/parasaurolophus/parasaurolophus.me.git
cd parasaurolophus.me
npm i
```

If you have a properly installed SSH key in [GitHub] you may, of course, use the
following, instead:

```bash
git clone git@github.com:parasaurolophus/parasaurolophus.me.git
cd parasaurolophus.me
npm i
```

## Development and Testing

```bash
npm run dev
```

...then open the URL displayed in the console in a web browser.

## Building and Deployment

```bash
npm run build
```

...then copy the contents of the `./dist` directory to the web root directory of a web server running [Apache].

_Note that the only dependency on [Apache] is the
[./public/.htaccess](./public/.htaccess) file. To port to a different web server
software stack, replace that file with the corresponding configuration for the
target software. The requirement is to redirect 404 errors back to
[./index.html](./index.html) for use by [vue-router]._

[Apache]: https://httpd.apache.org/
[git]: https://git-scm.com/
[GitHub]: https://github.com/
[NodeJS]: https://nodejs.org/en
[@highlightjs/vue-plugin]: https://www.npmjs.com/package/@highlightjs/vue-plugin
[@mdi/js]: https://www.npmjs.com/package/@mdi/js
[highlight.js]: https://highlightjs.org
[qr]: https://www.npmjs.com/package/qr
[vue]: https://vuejs.org/
[vue-router]: https://router.vuejs.org/
[xml-formatter]: https://www.npmjs.com/package/xml-formatter