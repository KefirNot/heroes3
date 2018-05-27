import { randomInteger } from './helper';

const simpleTileChance = 80;

export default () => {
	const isSimple = randomInteger(0, 100) <= simpleTileChance;
	return randomInteger(1, isSimple ? 10 : 24);
};