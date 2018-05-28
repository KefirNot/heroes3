import random from 'helper/random';

const getFileName = (direction) => {
	switch (direction.length) {
		case 1:
			if ('nsewo'.indexOf(direction) < 0) throw new Error('nsew');
			if (direction === 'o') return `EDG${random.int(16)}`;
			return `${direction}${random.int(4)}`;
		case 2:
			if ('ns'.indexOf(direction[0]) < 0) throw new Error('gomogei-horizontal');
			if ('we'.indexOf(direction[1]) < 0) throw new Error('gomogei-vertical');
			return direction;
	}
}

export default function (direction) {
	if (!direction) throw new Error('kall');
	if (direction.length === 0 || direction.length > 2) throw new Error('perdak');
	return `/images/surface/${getFileName(direction)}.png`;
}