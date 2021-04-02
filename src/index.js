import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime';
import { icons } from './assets/icons';
import App from './App';

React.icons = icons

ReactDOM.render(<App />, document.getElementById('root'));