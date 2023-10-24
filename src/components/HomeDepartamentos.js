import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';


export default class HomeDepartamentos extends Component {
  state = {
    departamentos: [],
    status: false
  };

  loadDepartamentos = () => {
    var request = "api/departamentos";
    var url = Global.apiDepartamentos + request;
    axios.get(url).then(response => {
      this.setState({
        departamentos: response.data,
        status: true
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  }

  render() {
    return (
      <div>
        <h1>Home Departamentos</h1>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Localidad</th>
              <th> Detalles </th>
            </tr>
          </thead>
          <tbody>
            {this.state.departamentos.map((departamento, index) => (
              <tr key={index}>
                <td>{departamento.nombre}</td>
                <td>{departamento.localidad}</td>
                <td>
                <NavLink to={"/details/" + departamento.numero } className="btn btn-primary">Detalles </NavLink>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

