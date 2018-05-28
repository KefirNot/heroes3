import * as array2d from 'helper/array2d';

export const aroundCellsToString = (cells, cellConverter) => {
	const mergedCells = array2d.flatten(cells).filter((x, i) => i !== 4);
	return mergedCells.reduce((acc, cell) => acc + cellConverter(cell), '');
}

export const nearbyCellsIsValid = (cells) => {
	if (!Array.isArray(cells)) return false;
	if (cells.length !== 3) return false;
	if (cells.includes(row => !Array.isArray(row))) return false;
	if (cells.includes(row => row.length !== 3)) return false;
	return true;
};