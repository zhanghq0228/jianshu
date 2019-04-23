import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyl} from './style';
import { IconStyl } from '../src/statics/iconFont/iconfont';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";

ReactDOM.render(<div><GlobalStyl/><IconStyl/><App /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
