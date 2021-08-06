import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseStateBasics from './UseState/A_EntendiendoUseState' //? AL IMPORTAR, SI LO QUE SE EXPORTA ES DEFAULT, ES POSIBLE CAMBIAR EL NOMBRE DEL COMPONENTE, SIEMPRE Y CUANDO SE UTILICE LUEGO EL MISMO NOMBRE EN INDEX.JS
import UseStateBasic from './UseState/B_UseStateBasic'

ReactDOM.render(
  <React.Fragment>
    <UseStateBasic></UseStateBasic>
  </React.Fragment>,
  document.getElementById('root')
);

