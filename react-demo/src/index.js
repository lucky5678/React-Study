import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';  //引入
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle='anything'/> ,document.getElementById('root'));
registerServiceWorker();
