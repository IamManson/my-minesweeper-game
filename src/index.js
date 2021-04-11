import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Minesweeper from './Minesweeper';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Minesweeper />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
