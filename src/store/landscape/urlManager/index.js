import { nearbyCellsIsValid } from './helper';
import getAbyssTileString from './abyss';
import getLandTileString from './sand';

const generateTileSrc = (cells) => {
	const targetCell = cells[1][1];
	switch (targetCell.type) {
		case 'a':
			return `abyss/${getAbyssTileString(cells)}`;
		case 's':
			return `sand/${getLandTileString()}`;
	}
	return 'unknown';
};

const addImageSrcPath = (src) => `/images/landscape/${src}.png`;

export default function (nearbyCells) {
	if (!nearbyCellsIsValid(nearbyCells)) throw new Error('pidor! ne to daesh!');
	return addImageSrcPath(generateTileSrc(nearbyCells));
}