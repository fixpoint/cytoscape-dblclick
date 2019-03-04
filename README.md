cytoscape-dblclick
================================================================================


## Description

Add &#39;dblclick&#39; event ([demo](https://lambdalisue.github.io/cytoscape-dblclick))

## Dependencies

 * Cytoscape.js ^3.2.0


## Usage instructions

Download the library:
 * via npm: `npm install cytoscape-dblclick`,
 * via bower: `bower install cytoscape-dblclick`, or
 * via direct download in the repository (probably from a tag).

Import the library as appropriate for your project:

ES import:

```js
import cytoscape from 'cytoscape';
import dblclick from 'cytoscape-dblclick';

cytoscape.use( dblclick );
```

CommonJS require:

```js
let cytoscape = require('cytoscape');
let dblclick = require('cytoscape-dblclick');

cytoscape.use( dblclick ); // register extension
```

AMD:

```js
require(['cytoscape', 'cytoscape-dblclick'], function( cytoscape, dblclick ){
  dblclick( cytoscape ); // register extension
});
```

Plain HTML/JS has the extension registered for you automatically, because no `require()` is needed.


## API

```js
// With default interval (500ms)
cy.dblclick();

// Specify interval (in milliseconds)
const interval = 300;
cy.dblclick(interval);
```

## Events

- `dblclick` : Emitted when two click has emitted within the interval (default: 500 ms)
- `dblclick:timeout`: Emitted when the internal timer has timed-out. Useful to detect a single click

## Build targets

* `npm run test` : Run Mocha tests in `./test`
* `npm run build` : Build `./src/**` into `cytoscape-dblclick.js`
* `npm run watch` : Automatically build on changes with live reloading (N.b. you must already have an HTTP server running)
* `npm run dev` : Automatically build on changes with live reloading with webpack dev server
* `npm run lint` : Run eslint on the source

N.b. all builds use babel, so modern ES features can be used in the `src`.


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Build the extension : `npm run build:release`
1. Commit the build : `git commit -am "Build for release"`
1. Bump the version number and tag: `npm version major|minor|patch`
1. Push to origin: `git push && git push --tags`
1. Publish to npm: `npm publish .`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-dblclick https://github.com/lambdalisue/cytoscape-dblclick.git`
1. [Make a new release](https://github.com/lambdalisue/cytoscape-dblclick/releases/new) for Zenodo.
