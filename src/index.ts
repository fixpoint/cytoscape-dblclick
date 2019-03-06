import extension from './core';

export default function register(cy?: any): void {
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

// Automatically register the extension for browser
declare global {
  interface Window {
    cytoscape?: any;
  }
}
if (typeof window.cytoscape !== 'undefined') {
  register(window.cytoscape);
}

// Extend cytoscape.Core
import 'cytoscape';

declare module 'cytoscape' {
  interface Core {
    dblclick(interval?: number): void;
  }
}
