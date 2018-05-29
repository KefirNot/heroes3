export const size = (width, height) => ({
    width,
    height,
})

export const tileSize = (width, height) => ({
    width: width * 32,
    height: height * 32,
})

export const backgroundImage = (url) => ({
    backgroundImage: `url('${url}')`,
});

export const backgroundColor = (color) => ({
    backgroundColor: color,
});

export default {
    size,
    tileSize,
    backgroundImage,
    backgroundColor,
}