import React, { Component } from 'react';
import { Routes, Route, BrowserRouter,useParams } from 'react-router-dom';
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamento from './CreateDepartamento';
import DetalleDepartamento from './DetalleDepartamento';

export default class Router extends Component {
  render() {

    function DetalleDepartamentoElement(){
      var{iddepartamento} = useParams();
      return <DetalleDepartamento iddepartamento = {iddepartamento}/>
    }

    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Routes>
          <Route path="/" element={<HomeDepartamentos />} />
          <Route path="/create" element={<CreateDepartamento />} />
          <Route path="/details/:iddepartamento" element={<DetalleDepartamentoElement/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
