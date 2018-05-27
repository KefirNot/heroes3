import { createAction, handleAction, combineActions  } from 'redux-actions';
import { landscapeSource } from './mapDataSource';
import { convertLandscape } from './mapDataConverter';
import { fillUrlData, getSize, isValid } from './landscape/helper';

const defaultLandscape = fillUrlData(convertLandscape(landscapeSource))
if(!isValid(defaultLandscape)) throw new Error('lalka');
const defaultState = {
	landscape: {
		data: defaultLandscape,
		size: getSize(defaultLandscape),
	}
};

export const action = createAction('REFILL_LANDSCAPE_URLS');

export const reducer = handleAction(action, state => ({ landscape: state.landscape }), defaultState);