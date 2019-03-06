'use strict';

require('cytoscape');

// https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-setdoubleclicktime
var INTERVAL = 500;
function extension(interval) {
    if (interval === void 0) { interval = INTERVAL; }
    var clicked = null;
    this.on('click', function (evt) {
        if (clicked && clicked === evt.target) {
            clicked = null;
            evt.preventDefault();
            evt.stopPropagation();
            evt.target.emit('dblclick', [evt]);
        }
        else {
            clicked = evt.target;
            setTimeout(function () {
                if (clicked && clicked === evt.target) {
                    clicked = null;
                    evt.target.emit('dblclick:timeout', [evt]);
                }
            }, interval);
        }
    });
    return this; // chainability
}

function register(cy) {
    if (!cy) {
        return;
    }
    // Initialize extension
    // Register extension
    var extensionName = 'dblclick';
    cy('core', extensionName, extension);
    // cy('collection', extensionName, extension);
    // cy('layout', extensionName, extension);
    // cy('renderer', extensionName, extension);
}
if (typeof window.cytoscape !== 'undefined') {
    register(window.cytoscape);
}

module.exports = register;
//# sourceMappingURL=index.common.js.map
