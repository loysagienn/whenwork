// Этот файл не используется, но возможно пригодится, поэтому пока оставляем

const { resolvePath: resolvePathDefault } = require('babel-plugin-module-resolver');

// если передать в alias в опциях module-resolver, то он после применения алиаса не переделывает путь
// относительно рута, а мне нужно, чтобы переделывал
// https://github.com/tleunen/babel-plugin-module-resolver/blob/master/src/resolvePath.js#L97
const resolvePath = (aliases) => (sourcePath, currentFile, options) => {
    let resultSourcePath = sourcePath;

    if (aliases && (sourcePath in aliases)) {
        resultSourcePath = aliases[sourcePath];
    }

    return resolvePathDefault(resultSourcePath, currentFile, options);
};

module.exports = resolvePath;
