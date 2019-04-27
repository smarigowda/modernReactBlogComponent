import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducer from './reducers';
const composeEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

const store = createStore(reducer, composeEnhancers);

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};
ReactDOM.render(<ReduxApp />, document.getElementById('root'));