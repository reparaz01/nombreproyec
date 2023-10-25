import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export default class UpdateDepartamento extends Component {

    state = {
        departamento: {},
        statusGet : false,
        statusUpdate : false
    }

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
 
    findDepartamento = () => {
        var request = "api/departamentos/" + this.props.iddepartamento;
        var url = Global.apiDepartamentos +  request;
        axios.get(url).then(response => {
            this.setState({
                statusGet : true,
                departamento :response.data
            })
        })
    }

    componentDidMount = () =>{
        this.findDepartamento();
    }

    updateDepartamento = (e) =>{
        e.preventDefault();
        var id  = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLocalidad.current.value;

        var data = {
            numero :id,
            nombre : nombre,
            localidad :localidad
        }
        
        var request = "api/departamentos"
        var url = Global.apiDepartamentos +  request;

        axios.put(url,data).then(response => {
            this.setState({
                statusUpdate : true
            })
        })
    }

  render() {
    return (
      <div>

        <NavLink to ="/"> Volver </NavLink>
        <h1> Actualizar Departamento {this.props.iddepartamento} </h1>

        {
            this.state.statusUpdate == true &&
            (
                <Navigate to="/" />
            )
        }


        {
            this.state.statusGet == true &&
            (
                <form style={{width:"500px",margin: "0 auto"}}>
                    <input type="hidden"  className="form-control" value = {this.state.departamento.numero} ref={this.cajaNumero}/>
                    <label>Nombre</label>
                    <input type = "text" className="form-control" defaultValue  = {this.state.departamento.nombre} ref={this.cajaNombre}/>
                    <label>Localidad</label>
                    <input type = "text" className="form-control" defaultValue = {this.state.departamento.localidad} ref={this.cajaLocalidad}/> <br></br>
                    <button onClick={ this.updateDepartamento} className ="btn btn-primary">
                        Modificar
                    </button>
                </form>

            )
        }

      </div>
    )
  }
}
