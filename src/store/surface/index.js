import urlManager from './urlManager';

const outlandWidth = 4;
const outlandHeight = 4;

const generateHorizontalOutland = (width) => {
	return [...Array(outlandHeight)].map(() => [...Array(width + 2 + outlandWidth * 2)].map(() => urlManager('o')));
}

const generateVerticalOutland = (height) => {
	return [...Array(height + 2)].map(() => [...Array(outlandWidth)].map(() => urlManager('o')));
}

const generateHorizontalBorder = (width, modifier) => [
	urlManager(`${modifier}w`),
	...[...Array(width)].map(() => urlManager(modifier)),
	urlManager(`${modifier}e`),
];

const generateVerticalBorder = (height, modifier) => [...Array(height)].map(() => urlManager(modifier));

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