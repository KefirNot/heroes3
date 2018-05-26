import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './component';
import reducer from './store/reducer';

const store = createStore(reducer);

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<AppContainer>
				<Component />
			</AppContainer>
		</Provider>,
		document.getElementById('root')
	);
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./component', () => { render(App); });
}