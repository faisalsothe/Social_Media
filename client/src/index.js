import React from "react"
import ReactDOM from "react-dom"

//allows for accessing state {be it parent / child component}
import { Provider } from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers'
import App from './App.js';
import "./index.css"

const store=createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root"));