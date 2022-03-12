import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'
import ContexLayer from './contextLayer';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContexLayer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
