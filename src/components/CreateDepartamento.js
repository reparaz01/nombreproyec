import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global';
import { Navigate } from 'react-router-dom'
export default class CreateDepartamento extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
 
 
    state = {
        status: false
    }
 
    insertDepar = (e) => {
        e.preventDefault();
        var numero = parseInt(this.cajaNumero.current.value)
        var nombre = this.cajaNombre.current.value
        var localidad = this.cajaLocalidad.current.value
 
        var url = Global.apiDepartamentos + "api/departamentos"
 
        var departamento = {
            numero: numero,
            nombre: nombre,
            localidad: localidad
        }
 
        axios.post(url, departamento).then(response => {
            this.setState({
                status: true
            })
        })
 
    }
 
    render() {
 
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div>
                    <h1>CreateDepartamentos</h1>
 
 
                    <form onSubmit={this.handleSubmit} style={{ padding: "10px" }}>
                        <div className="form-group">
                            <label htmlFor="campo1">id Departamento</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaNumero}
 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaNombre}
 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo3">Localidad</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaLocalidad}
 
                            />
                        </div>
 
 
 
                        <button type="submit" className="btn btn-primary" onClick={this.insertDepar}>Crear departamento</button>
                    </form>
 
 
                </div>
            )
        }
 
    }
}