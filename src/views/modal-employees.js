import React, { Component } from 'react';
import M from "materialize-css";
const axios = require('axios');
class formEmployee extends Component {
    constructor() {
        super();
        this.state = { name: '', age: '', salary: '' }
    }

    handleChange(event) {

        var title = `${event.target.name}`;

        var obj = {};
        obj[title] = event.target.value
        console.log(obj)
        this.setState(obj)
    }

    render() {
        return (
            <div id="modal" className="modal">
                <form className="modal-content row" id="form">
                    <div className="input-field col m6">
                        <input onChange={this.handleChange.bind(this)} id="name" type="text" class="validate" name="name" />
                        <label class="active" for="name">Nombre</label>
                    </div>
                    <div className="input-field col m6">
                        <input onChange={this.handleChange.bind(this)} id="salary" type="text" class="validate" name="salary" />
                        <label class="active" for="salary">Salario</label>
                    </div>
                    <div className="input-field col m6">
                        <input onChange={this.handleChange.bind(this)} id="age" type="text" min="18" class="validate" name="age" />
                        <label class="active" for="age">Edad</label>
                    </div>
                </form>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    <a href="#!" className="waves-effect waves-green btn-flat" onClick={this.save.bind(null, this.state)}>Guardar</a>
                </div>
            </div>
        )
    }

    save(param) {
        console.log(param);
        axios.post(`http://dummy.restapiexample.com/api/v1/create`, param).then((res) => {
            if (res.status === 200) {
                M.toast({ html: 'Se Creó correctamiente' });
            } else {
                M.toast({ html: 'No se pudo crear, intente mas tarde' });
            }

        }).catch((err) => {
            alert(err)
        });
    }
}

export default formEmployee;
