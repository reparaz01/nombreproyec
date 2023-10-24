import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class DetalleDepartamento extends Component {
  state = {
    departamento: {},
    status: false
  }

  findDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    var url = Global.apiDepartamentos + request;
    axios.get(url).then(response => {
      this.setState({
        departamento: response.data,
        status: true
      });
    });
  }

  componentDidMount = () => {
    this.findDepartamento();
  }

  render() {
    return (
      <div>
        <h1>
          Detalles del Departamento {this.props.iddepartamento}
        </h1>
        &nbsp;  &nbsp; <NavLink to="/"  className="btn btn-primary"  >Volver a La Lista </NavLink>
        <hr />
        {this.state.status === true &&
          (
            <ul className='list-group'>
              <li className='list-group-item'>
                Id: {this.state.departamento.numero}
              </li>
              <li className='list-group-item'>
                Nombre: {this.state.departamento.nombre}
              </li>
              <li className='list-group-item'>
                Localidad: {this.state.departamento.localidad}
              </li>
            </ul>
          )
        }
      </div>
    );
  }
}
