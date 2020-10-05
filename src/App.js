import React from 'react';
import './App.css';

import Mensajes from './componentes/Mensajes.jsx';
import MensajesB from './componentes/MensajesB.jsx';
import GraficaA from './componentes/GraficaA';
import GraficaB from './componentes/GraficaB';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> PROYECTO 1: SISTEMAS OPERATIVOS - 201504143</h1>
      </header>
        <body>

        <h2 align="center"> SERVIDOR A </h2>
        <div>
          <div className="Izq">
             <Mensajes/>
          </div>
          <div className="Der">
            <GraficaA/>
          </div>
        </div>


        <h2 align="center"> SERVIDOR B</h2>
        <div>
          <div className="Izq">
            <MensajesB/>
          </div>
          <div className="Der">
            <GraficaB/>
          </div>
        </div>

        </body>
    </div>
  );
}

export default App;
