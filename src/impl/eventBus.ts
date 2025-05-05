/* eslint-disable-next-line */
type Callback = (...args: any[]) => void;
const callbacks: Record<string, Callback[]> = {};

export const eventBus = {
    on: (event: string, cb: Callback) => {
        callbacks[event] = callbacks[event] || [];
        callbacks[event].push(cb);
    },
    off: (event: string, cb: Callback) => {
        callbacks[event] = callbacks[event]?.filter((f) => f !== cb) || [];
    },
    /* eslint-disable-next-line */
    emit: (event: string, ...args: any[]) => {
        callbacks[event]?.forEach((cb) => cb(...args));
    },
};
