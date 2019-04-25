import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers';

const store = createStore(reducer);

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};
ReactDOM.render(<ReduxApp />, document.getElementById('root'));