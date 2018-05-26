import { randomInteger } from '../../helpers/random';

const nearbyCellsIsValid = (cells) => {
	if (!Array.isArray(cells)) return false;
	if (cells.length !== 3) return false;
	if (cells.includes(row => !Array.isArray(row))) return false;
	if (cells.includes(row => row.length !== 3)) return false;
	return true;
};

const getAbyssTileString = (cells) => {
	const mergedCells = [].concat.apply([], cells);
	const bMap = mergedCells
		.map(cell => cell.type === 'a')
		.filter((x, i) => i !== 4);
	const sMap = bMap.reduce((acc, b) => acc + (b ? '1' : '0'), 's');
	switch (sMap) {
		case 's11111111':
			return 's';
		case 's00001011':
		case 's00101111':
			return `anw${randomInteger(1, 2)}`;
		case 's00010110':
		case 's00010111':
		case 's10010111':
		case 's10010110':
			return `asw${randomInteger(1, 2)}`;
		case 's01101000':
		case 's01101001':
		case 's11101001':
		case 's11101000':
			return `ane${randomInteger(1, 2)}`;
		case 's11010000':
		case 's11010100':
		case 's11110100':
		case 's11110000':
			return `ase${randomInteger(1, 2)}`;
		case 's10011111':
		case 's00111111':
		case 's00011111':
		case 's10111111':
			return `sw${randomInteger(1, 2)}`;
		case 's11111001':
		case 's11111100':
		case 's11111000':
		case 's11111101':
			return `se${randomInteger(1, 2)}`;
		case 's11101011':
		case 's01101111':
		case 's01101011':
		case 's11101111':
			return `sn${randomInteger(1, 2)}`;
		case 's11010111':
		case 's11110110':
		case 's11010110':
		case 's11110111':
			return `ss${randomInteger(1, 2)}`;
		case 's01111111':
			return `bnw${randomInteger(1, 2)}`;
		case 's11111110':
			return `bse${randomInteger(1, 2)}`;
		case 's11111011':
			return `bne${randomInteger(1, 2)}`;
		case 's11011111':
			return `bsw${randomInteger(1, 2)}`;
		default:
			console.log(sMap);
			return 'z';
	}

};

const simpleTileChance = 80;

const getLandTileString = () => {
	const isSimple = randomInteger(0, 100) <= simpleTileChance;
	return randomInteger(1, isSimple ? 10 : 24);
};

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
	const src = generateTileSrc(nearbyCells);
	return addImageSrcPath(src);
}