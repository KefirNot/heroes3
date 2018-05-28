import { aroundCellsToString } from './helper';
import random from 'helper/random';
import { tileType } from '../tileType';

export default cells => {
	const sMap = aroundCellsToString(cells, cell => cell.type === tileType.abyss ? '1' : '0');
	switch (sMap) {
		case '11111111':
			return 's';
		case '00001011':
		case '00101111':
			return `anw${random.int(2)}`;
		case '00010110':
		case '00010111':
		case '10010111':
		case '10010110':
			return `asw${random.int(2)}`;
		case '01101000':
		case '01101001':
		case '11101001':
		case '11101000':
			return `ane${random.int(2)}`;
		case '11010000':
		case '11010100':
		case '11110100':
		case '11110000':
			return `ase${random.int(2)}`;
		case '10011111':
		case '00111111':
		case '00011111':
		case '10111111':
			return `sw${random.int(2)}`;
		case '11111001':
		case '11111100':
		case '11111000':
		case '11111101':
			return `se${random.int(2)}`;
		case '11101011':
		case '01101111':
		case '01101011':
		case '11101111':
			return `sn${random.int(2)}`;
		case '11010111':
		case '11110110':
		case '11010110':
		case '11110111':
			return `ss${random.int(2)}`;
		case '01111111':
			return `bnw${random.int(2)}`;
		case '11111110':
			return `bse${random.int(2)}`;
		case '11111011':
			return `bne${random.int(2)}`;
		case '11011111':
			return `bsw${random.int(2)}`;
		default:
			console.log('abyss tile unknown: ', sMap);
			return 'z';
	}
};