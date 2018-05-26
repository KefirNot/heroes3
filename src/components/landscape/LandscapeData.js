import tileUrlManager from './tileUrlManager';
import * as tileFactory from './tileFactory';
import { randomInteger } from '../../helpers/random';

export default class LandscapeData {
	constructor(data, needFillUrl = false) {
		this.data = data;
		if (!this.isValid) {
			this.data = [];
			throw new Error('sosach');
		}
		if(needFillUrl) {
			this.fillUrlData();
		}
	}

	isValid(data) {
		if (!Array.isArray(data)) return false;
		if (data.length === 0) return true;
		if (data.includes(row => !Array.isArray(row))) return false;
		if (data.includes(row => row.length !== data[0].length)) return false;
		return true;
	}

	get size() {
		const { data } = this;
		const height = data.length;
		const width = data.length > 0 ? data[0].length : 0;
		return { width, height };
	}

	get tiles() {
		return this.data;
	}

	generateNearbyCells = (x, y) => {
		const { getCell } = this;
		return [
			[getCell(x - 1, y - 1), getCell(x - 1, y), getCell(x - 1, y + 1)],
			[getCell(x, y - 1),     getCell(x, y),     getCell(x, y + 1)],
			[getCell(x + 1, y - 1), getCell(x + 1, y), getCell(x + 1, y + 1)],
		];
	}

	getCell = (x, y) => {
		const { size, data } = this;
		if (x < 0 || x >= size.width) return tileFactory.empty();
		if (y < 0 || y >= size.height) return tileFactory.empty();
		return data[y][x];
	}

	fillUrlData = () => {
		const { data, size, generateNearbyCells } = this;
		const result = [...data.map(row => [...row])];
		for (let x = 0; x < size.width; x++) {
			for (let y = 0; y < size.height; y++) {
				const nearbyCells = generateNearbyCells(x, y);
				data[y][x].url = tileUrlManager(nearbyCells);
			}
		}
	}
}