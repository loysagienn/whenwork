const defaultTimeout = 1000 * 60 * 5;

const memoize = (func, timeout = defaultTimeout) => {
    const cache = {};

    return (arg) => {
        if (!cache[arg]) {
            cache[arg] = func(arg);

            setTimeout(() => delete cache[arg], timeout);
        }

        return cache[arg];
    };
};

export default memoize;
