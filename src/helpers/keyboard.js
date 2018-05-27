import { action } from '../store/uiReducer';

const makeKeyPressHandler = dispatch => event => {
	switch (event.keyCode) {
		case 103:
			dispatch(action());
	}
}

export const startListen = (dispatch) => {
	document.addEventListener("keypress", makeKeyPressHandler(dispatch));
}
