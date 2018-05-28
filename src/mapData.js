import * as tileFactory from './component/landscape/tileFactory';

const s = () => tileFactory.sand();
const a = () => tileFactory.abyss();

const data = [
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s 0 0 0 0 0 0 0 s s s s s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 0 0 0 0 0 s s s s',
	's s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s 0 0 0 0 0 0 0 0 s s s s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 0 0 0 0 0 0 s s s',
	's s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 0 0 0 0 0 0 s s s',
	's s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s 0 0 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s 0 0 0 0 s s s',
	's s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s 0 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s',
	's s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s 0 0 0 0 s s s',
	's s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s 0 0 0 0 0 s s s',
	's s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 0 0 0 0 0 s s s s',
	's s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 0 0 0 0 s s s s s',
	's s 0 0 0 s s s s s s s s s 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 0 0 0 0 0 s s s s',
	's s 0 0 0 s s s s s s s s s 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s 0 0 0 0 0 s s s',
	's s 0 0 0 s s s s s s s s s 0 0 0 s s s 0 0 0 s s s 0 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s 0 0 0 0 0 s s',
	's s 0 0 0 s s s s s s s s s 0 0 0 s s s 0 0 0 s s 0 0 0 0 0 s s 0 0 0 s s s 0 0 0 s s s 0 0 0 s s s 0 0 0 0 s s',
	's s 0 0 0 s s s s s s s s s 0 0 0 s s s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s',
	's s 0 0 0 s s s s s s s s s 0 0 0 s s s 0 0 0 0 0 0 0 0 s s s s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s',
	's s 0 0 0 s s s s s s s s s 0 0 0 s s s 0 0 0 0 0 0 0 s s s s s 0 0 0 0 0 0 0 0 0 s s s 0 0 0 s s s s 0 0 0 s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
	's s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s s',
];

export default data.map(row => row.split(' ').map(char => {
	switch (char) {
		case 's': return s();
		case '0': return a();
	}
	return a();
}));
