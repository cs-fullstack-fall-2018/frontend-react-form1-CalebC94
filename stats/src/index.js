import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PersonStats from './PersonStats'
import CarForm from './CarForm'

ReactDOM.render(<PersonStats/>, document.getElementById('root'));
registerServiceWorker();
