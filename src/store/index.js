import * as ui from './uiReducer';
import * as map from './mapReducer';
import { combineReducers } from 'redux'

export default combineReducers({
	ui: ui.reducer,
	map: map.reducer,
});