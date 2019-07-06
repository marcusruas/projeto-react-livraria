import React from 'react';
import ReactDOM from 'react-dom';
import './ui/css/index.css';
import App from './App';
import * as serviceWorker from './core/services/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
