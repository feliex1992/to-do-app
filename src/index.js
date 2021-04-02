import 'regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import './reg-sw';
import { icons } from './assets/icons';
import App from './App';

React.icons = icons

ReactDOM.render(<App />, document.getElementById('root'));