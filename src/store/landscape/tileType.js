const Type = (name, type) => ({ name, type });

export const empty = () => new Type('empty', 'e');
export const abyss = () => new Type('abyss', 'a');
export const sand =  () => new Type('sand',  's');

export const tileType = [
	empty(),
	abyss(),
	sand(),
].reduce((acc, type) => {
	acc[type.name] = type.type
	return acc;
}, {});