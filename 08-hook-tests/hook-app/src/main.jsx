import React from 'react';
import { HooksApp } from './HooksApp';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <HooksApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
