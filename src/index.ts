import { Core } from 'cytoscape';
import extension from './core';

export function register(cy?: any, ...args: any[]) {
  if (!cy) {
    return;
  }
  // Initialize extension

  // Register extension
  const extensionName = 'dblclick';
  cy('core', extensionName, extension);
  // cy('collection', extensionName, extension);
  // cy('layout', extensionName, extension);
  // cy('renderer', extensionName, extension);
}

// Automatically register the extension
declare const cytoscape: any;

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}
