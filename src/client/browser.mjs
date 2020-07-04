export const getWindowHeight = () => window.innerHeight;

export const addWindowEvent = (event, handler) => window.addEventListener(event, handler);

export const removeWindowEvent = (event, handler) => window.removeEventListener(event, handler);
