(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.cytoscapeExtensionSkeleton = {}));
}(this, function (exports) { 'use strict';

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
      return this;
  }

  function register(cy) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
      }
      if (!cy) {
          return;
      }
      var extensionName = 'dblclick';
      cy('core', extensionName, extension);
  }
  if (typeof cytoscape !== 'undefined') {
      register(cytoscape);
  }

  exports.register = register;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
