import { createAction, handleAction, combineActions } from 'redux-actions';

const defaultState = {
    showGrid: false,
};

export const action = createAction('TOGGLE_GRID');

export const reducer = handleAction(action, state => ({ showGrid: !state.showGrid }), defaultState);