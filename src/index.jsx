import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index.jsx';

const div = document.createElement('div');
document.body.appendChild(div);

render(<App />, div);
