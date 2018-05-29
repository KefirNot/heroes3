import urlManager from './urlManager';
import * as tile from './tileType';
import array2d from 'helper/array2d';

const generateNearbyCells = (data, x, y) => [
	[getCell(data, x - 1, y - 1), getCell(data, x - 1, y), getCell(data, x - 1, y + 1)],
	[getCell(data, x, y - 1), getCell(data, x, y), getCell(data, x, y + 1)],
	[getCell(data, x + 1, y - 1), getCell(data, x + 1, y), getCell(data, x + 1, y + 1)],
];

const getCell = (data, x, y) => {
	const size = array2d.getSize(data);
	if (x < 0 || x >= size.width) return tile.empty();
	if (y < 0 || y >= size.height) return tile.empty();
	return data[y][x];
}

export const fillUrlData = (data) => {
	const size = array2d.getSize(data);
	for (let x = 0; x < size.width; x++) {
		for (let y = 0; y < size.height; y++) {
			const nearbyCells = generateNearbyCells(data, x, y);
			data[y][x].url = urlManager(nearbyCells);
		}
	}
	return data;
}