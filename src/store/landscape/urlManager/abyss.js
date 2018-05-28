import { aroundCellsToString } from './helper';
import { randomInteger } from 'helper/random';
import { tileType } from '../tileType';

export default cells => {
	const sMap = aroundCellsToString(cells, cell => cell.type === tileType.abyss ? '1' : '0');
	switch (sMap) {
		case '11111111':
			return 's';
		case '00001011':
		case '00101111':
			return `anw${randomInteger(1, 2)}`;
		case '00010110':
		case '00010111':
		case '10010111':
		case '10010110':
			return `asw${randomInteger(1, 2)}`;
		case '01101000':
		case '01101001':
		case '11101001':
		case '11101000':
			return `ane${randomInteger(1, 2)}`;
		case '11010000':
		case '11010100':
		case '11110100':
		case '11110000':
			return `ase${randomInteger(1, 2)}`;
		case '10011111':
		case '00111111':
		case '00011111':
		case '10111111':
			return `sw${randomInteger(1, 2)}`;
		case '11111001':
		case '11111100':
		case '11111000':
		case '11111101':
			return `se${randomInteger(1, 2)}`;
		case '11101011':
		case '01101111':
		case '01101011':
		case '11101111':
			return `sn${randomInteger(1, 2)}`;
		case '11010111':
		case '11110110':
		case '11010110':
		case '11110111':
			return `ss${randomInteger(1, 2)}`;
		case '01111111':
			return `bnw${randomInteger(1, 2)}`;
		case '11111110':
			return `bse${randomInteger(1, 2)}`;
		case '11111011':
			return `bne${randomInteger(1, 2)}`;
		case '11011111':
			return `bsw${randomInteger(1, 2)}`;
		default:
			console.log('abyss tile unknown: ', sMap);
			return 'z';
	}
};