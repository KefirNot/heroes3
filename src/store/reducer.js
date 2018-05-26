import * as actions from './actions.js';

const initialState = {
	data: [
		'Acura',
		'Daihatsu',
		'Datsun',
		'Hino',
		'Honda',
		'Infiniti',
		'Isuzu',
		'Lexus',
		'Mazda',
		'Mitsubishi Motors',
		'Nissan',
		'Subaru',
		'Suzuki',
		'Toyota',
		'Dome',
		'ASL',
		'Scion',
		'Mitsuoka',
	],
	searchLine: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actions.SEARCH_APPLY:
		return { ...state, searchLine: action.payload.searchLine };
	case actions.SEARCH_CLEAR:
		return { ...state, searchLine: null };
	default:
		break;
	}
	return state;
};

export default reducer;
