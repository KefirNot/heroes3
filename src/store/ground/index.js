let id = 1;

const createGroundObject = (x, y, width, height, url) => ({ coord: { x, y }, size: { width, height }, url, id: id++ });

const createChest = (x, y) => createGroundObject(x, y, 2, 1, 'images/ground/chest.gif');

const createSign = (x, y) => createGroundObject(x, y, 1, 1, 'images/ground/sign.gif');

export const defaultState = {
    data: [
        createChest(1, 1),
        createChest(1, 2),
        createChest(1, 3),
        createChest(1, 4),
        createSign(7, 11),
        createSign(7, 13),
        createSign(7, 15),
        createSign(7, 17),
    ],
}
