export default function register(cy?: any): void;
declare global {
    interface Window {
        cytoscape?: any;
    }
}
import 'cytoscape';
declare module 'cytoscape' {
    interface Core {
        dblclick(interval?: number): void;
    }
}
