export const size = (width, height) => ({
    width,
    height,
})

export const tileSize = (width, height) => ({
    width: width * 32,
    height: height * 32,
})

export const tileCoords = (x, y) => ({
    top: y * 32,
    left: x * 32,
});

export const backgroundImage = (url) => ({
    backgroundImage: `url('${url}')`,
});

export const backgroundColor = (color) => ({
    backgroundColor: color,
});

export function merge(...rest) {
    return Object.assign({}, ...rest);
}

export default {
    size,
    tileSize,
    tileCoords,
    backgroundImage,
    backgroundColor,
    merge,
}