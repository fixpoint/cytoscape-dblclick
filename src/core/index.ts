import { Core, EventObject } from 'cytoscape';

// https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-setdoubleclicktime
const INTERVAL = 500;

export default function extension(
  this: Core,
  interval: number = INTERVAL,
): Core {
  let clicked: any | null = null;

  this.on('click', (evt: EventObject) => {
    if (clicked && clicked === evt.target) {
      clicked = null;
      (evt as any).preventDefault();
      (evt as any).stopPropagation();
      evt.target.emit('dblclick', [evt]);
    } else {
      clicked = evt.target;
      setTimeout(() => {
        if (clicked && clicked === evt.target) {
          clicked = null;
          evt.target.emit('dblclick:timeout', [evt]);
        }
      }, interval);
    }
  });

  return this; // chainability
}
