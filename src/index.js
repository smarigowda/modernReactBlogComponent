import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};
ReactDOM.render(<ReduxApp />, document.getElementById('root'));