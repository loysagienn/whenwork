const getObjectClassNames = (className) => Object.entries(className)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');

let makeClassName;

const processArg = (arg) => {
    if (Array.isArray(arg)) {
        return makeClassName(arg);
    }

    if (typeof arg === 'object') {
        return getObjectClassNames(arg);
    }

    if (typeof arg === 'string') {
        return arg;
    }

    return null;
};

makeClassName = (args) => args.map(processArg).filter(Boolean).join(' ');

export default (...args) => makeClassName(args);
