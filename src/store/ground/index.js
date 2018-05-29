const createGroundObject = (x, y, width, height, url) => ({ coord: { x, y }, size: { width, height }, url });

const createChest = (x, y) => createGroundObject(x, y, 2, 1, '/images/ground/chest.gif');

const createSign = (x, y) => createGroundObject(x, y, 1, 1, '/images/ground/sign.gif');

export const defaultState = {
    data: [
        createChest(1, 1),
        createChest(1, 2),
        createChest(1, 3),
        createChest(1, 4),
        createSign(7, 1),
        createSign(7, 3),
        createSign(7, 5),
        createSign(7, 7),
    ],
}
