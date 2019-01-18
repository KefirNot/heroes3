import { nearbyCellsIsValid } from './helper';
import getAbyssTileString from './abyss';
import getLandTileString from './sand';
import { tileType } from '../tileType';

const generateTileSrc = (cells) => {
	const targetCell = cells[1][1];
	switch (targetCell.type) {
		case tileType.abyss:
			return `abyss/${getAbyssTileString(cells)}`;
		case tileType.sand:
			return `sand/${getLandTileString()}`;
	}
	return 'unknown';
};

const addImageSrcPath = (src) => `images/landscape/${src}.png`;

export default function (nearbyCells) {
	if (!nearbyCellsIsValid(nearbyCells)) throw new Error('ne to daesh!');
	return addImageSrcPath(generateTileSrc(nearbyCells));
}