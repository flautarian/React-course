import React from "react";
import ReactDOM from "react-dom/client";
import { Title } from './Title';
import { FirstApp } from "./FirstApp";
import './index.css';
import { CounterApp } from "./CounterApp";

let valueCounterApp = 10;

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <Title title="Hola!, bienvenido a mi App" subtitle="subtitulo"/>
    <FirstApp/>
    <CounterApp value={valueCounterApp}/>
  </React.StrictMode>
)