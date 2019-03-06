import extension from './core';

export default function register(cy?: any, ...args: any[]): void {
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
