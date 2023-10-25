import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class EliminarDepartamento extends Component {
  state = {
    status: false,
  }

  deleteDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    var url = Global.apiDepartamentos + request;
    axios.delete(url).then(response => {
      this.setState({
        status: true
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/" />}
        <NavLink to="/">Back to List</NavLink>
        <h1 style={{ color: "red" }}>
          ¿Eliminar Departamento: {this.props.iddepartamento}?
        </h1>
        <button className='btn btn-danger' onClick={() => this.deleteDepartamento()}>
          Delete
        </button>
      </div>
    )
  }
}
