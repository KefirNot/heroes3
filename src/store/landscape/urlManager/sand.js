import random from 'helper/random';

const simpleTileChance = 80;

export default () => {
	const isSimple = random.int(100) <= simpleTileChance;
	return random.int(isSimple ? 10 : 24);
};