export const SEARCH_APPLY = 'SEARCH/APPLY';
export const SEARCH_CLEAR = 'SEARCH/CLEAR';

export function applySearch(searchLine) {
	return { type: SEARCH_APPLY, payload: { searchLine } };
}

export function clearSearch() {
	return { type: SEARCH_CLEAR, payload: {} };
}
