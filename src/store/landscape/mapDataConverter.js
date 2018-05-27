import * as tileFactory from './tileType';

export const convertLandscape = (data) => data.map(row => row.split(' ').map(char => {
	switch (char) {
		case 's': return tileFactory.sand();
		case '0': return tileFactory.abyss();
	}
	return tileFactory.abyss();
}));
