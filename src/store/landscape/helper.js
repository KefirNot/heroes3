import tileUrlManager from './urlManager';
import * as tile from './tileType';

export const isValid = (data) => {
	if (!Array.isArray(data)) return false;
	if (data.length === 0) return true;
	if (data.includes(row => !Array.isArray(row))) return false;
	if (data.includes(row => row.length !== data[0].length)) return false;
	return true;
}

export const getSize = (data) => ({
	width: data.length > 0 ? data[0].length : 0,
	height: data.length,
})

const generateNearbyCells = (data, x, y) => [
	[getCell(data, x - 1, y - 1), getCell(data, x - 1, y), getCell(data, x - 1, y + 1)],
	[getCell(data, x, y - 1), getCell(data, x, y), getCell(data, x, y + 1)],
	[getCell(data, x + 1, y - 1), getCell(data, x + 1, y), getCell(data, x + 1, y + 1)],
];

const getCell = (data, x, y) => {
	const size = getSize(data);
	if (x < 0 || x >= size.width) return tile.empty();
	if (y < 0 || y >= size.height) return tile.empty();
	return data[y][x];
}

export const fillUrlData = (data) => {
	const size = getSize(data);
	const result = [...data.map(row => [...row])];
	for (let x = 0; x < size.width; x++) {
		for (let y = 0; y < size.height; y++) {
			const nearbyCells = generateNearbyCells(data, x, y);
			data[y][x].url = tileUrlManager(nearbyCells);
		}
	}
	return data;
}