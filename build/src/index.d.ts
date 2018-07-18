import Config from './models/config';
import { orderEvents } from './utils/events.worker';
import Api from './api';
export { orderEvents };
export default class Timeline extends Api {
    private wrapper;
    constructor(config: Config);
    private removeChildren();
    reload: () => void;
    private dispatchReloadEvent;
    private debouncedReload;
    private render();
    private renderBands();
    private renderIndicators();
    private appendToWrapper;
}
