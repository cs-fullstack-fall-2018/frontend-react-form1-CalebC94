import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PersonStats from './PersonStats'

ReactDOM.render(<PersonStats />, document.getElementById('root'));
registerServiceWorker();
