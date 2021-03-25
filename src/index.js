import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from "history";
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router-dom";
import "../src/assets/scss/index.scss";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';
const history = createBrowserHistory();

const store = createStore(
    reducer,
    composeWithDevTools({
        trace: true,
    })(applyMiddleware(thunk)),
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
