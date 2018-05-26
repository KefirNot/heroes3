const Type = (name, type) => ({ name, type });

export const empty = () => new Type('empty', 'e');
export const abyss = () => new Type('abyss', 'a');
export const sand =  () => new Type('sand',  's');

export const allTypes = [
	empty(),
	abyss(),
	sand(),
];