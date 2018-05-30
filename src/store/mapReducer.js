import { createAction, handleAction, combineActions } from 'redux-actions';
import { landscapeSmallSource, convertLandscape, fillUrlData } from './landscape';
import array2d from 'helper/array2d';
import * as surface from './surface';
import * as ground from './ground';

const defaultLandscape = fillUrlData(convertLandscape(landscapeSmallSource))
const defaultLandscapeSize = array2d.getSize(defaultLandscape);
if (!array2d.isValid(defaultLandscape)) throw new Error('lalka');
const defaultState = {
    landscape: {
        data: defaultLandscape,
        size: defaultLandscapeSize,
    },
    surface: surface.generate(defaultLandscapeSize),
    ground: ground.defaultState,
};

export const action = createAction('REFILL_LANDSCAPE_URLS');

export const reducer = handleAction(action, state => ({ landscape: state.landscape }), defaultState);