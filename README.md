# cytoscape-dblclick

## Description

Add dblclick event ([demo](https://lambdalisue.github.io/cytoscape-dblclick))

## Dependencies

 * Cytoscape.js ^3.2.0


## Usage instructions

Download the library:
 * via npm: `npm install cytoscape-dblclick`,
 * via unpkg: `https://unpkg.com/cytoscape-dblclick/dist/index.js`

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

* `npm run build` : Build `./src/**` into `dist/index.js`
* `npm run lint` : Run eslint on the source

## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Build the extension : `npm run build`
1. Commit the build : `git commit -am "Build for release"`
1. Bump the version number and tag: `npm version major|minor|patch`
1. Push to origin: `git push && git push --tags`
1. Publish to npm: `npm publish .`
