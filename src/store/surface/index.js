import urlManager from './urlManager';
import array from 'helper/array';

const outlandWidth = 4;
const outlandHeight = 4;

const generateHorizontalOutland = (width) => {
	return array.empty(outlandHeight).map(() => array.empty(width + 2 + outlandWidth * 2).map(() => urlManager('o')));
}

const generateVerticalOutland = (height) => {
	return array.empty(height + 2).map(() => array.empty(outlandWidth).map(() => urlManager('o')));
}

const generateHorizontalBorder = (width, modifier) => [
	urlManager(`${modifier}w`),
	...array.empty(width).map(() => urlManager(modifier)),
	urlManager(`${modifier}e`),
];

const generateVerticalBorder = (height, modifier) => array.empty(height).map(() => urlManager(modifier));

export const generate = (size) => ({
	outland: {
		top: generateHorizontalOutland(size.width),
		right: generateVerticalOutland(size.height),
		bottom: generateHorizontalOutland(size.width),
		left: generateVerticalOutland(size.height),
		width: outlandWidth,
		height: outlandHeight,
	},
	border: {
		top: generateHorizontalBorder(size.width, 'n'),
		right: generateVerticalBorder(size.height, 'e'),
		bottom: generateHorizontalBorder(size.width, 's'),
		left: generateVerticalBorder(size.height, 'w'),
	}
})