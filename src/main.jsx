import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { FirstApp } from './FirstApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value={ 10 } /> */}
    <FirstApp title='My First App' />
  </React.StrictMode>
);