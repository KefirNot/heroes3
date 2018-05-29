import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './app';
import reducer from './store';

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

if (module.hot) {
	module.hot.accept('./app', () => { render(App); });
}