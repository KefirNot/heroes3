import { createAction, handleAction, combineActions } from 'redux-actions';
import { landscapeSource, convertLandscape, fillUrlData, getSize, isValid } from './landscape';
import * as surface from './surface';

const defaultLandscape = fillUrlData(convertLandscape(landscapeSource))
const defaultLandscapeSize = getSize(defaultLandscape);
if (!isValid(defaultLandscape)) throw new Error('lalka');
const defaultState = {
	landscape: {
		data: defaultLandscape,
		size: defaultLandscapeSize,
	},
	surface: surface.generate(defaultLandscapeSize),
};

export const action = createAction('REFILL_LANDSCAPE_URLS');

export const reducer = handleAction(action, state => ({ landscape: state.landscape }), defaultState);