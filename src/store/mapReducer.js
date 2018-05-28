import { createAction, handleAction, combineActions } from 'redux-actions';
import { landscapeSource, convertLandscape, fillUrlData } from './landscape';
import array2d from 'helper/array2d';
import * as surface from './surface';

const defaultLandscape = fillUrlData(convertLandscape(landscapeSource))
const defaultLandscapeSize = array2d.getSize(defaultLandscape);
if (!array2d.isValid(defaultLandscape)) throw new Error('lalka');
const defaultState = {
	landscape: {
		data: defaultLandscape,
		size: defaultLandscapeSize,
	},
	surface: surface.generate(defaultLandscapeSize),
};

export const action = createAction('REFILL_LANDSCAPE_URLS');

export const reducer = handleAction(action, state => ({ landscape: state.landscape }), defaultState);