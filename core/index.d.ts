import { Core } from 'cytoscape';
export default function extension(this: Core, interval?: number): Core;
declare module 'cytoscape' {
    interface Core {
        dblclick(interval?: number): void;
    }
}
