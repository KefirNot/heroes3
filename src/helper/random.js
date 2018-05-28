export const intFromRange = (min, max) => {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

export const int = (max) => intFromRange(1, max);

export default {
    int,
    intFromRange,
}