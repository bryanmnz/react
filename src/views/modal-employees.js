import React, { Component } from 'react';
import M from "materialize-css";
const axios = require('axios');
const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false
});
class formEmployee extends Component {
    constructor() {
        super();
        this.state = { name: '', age: '', salary: '' }
    }

    handleChange() {
        let iName = document.getElementById('name');
        let iSalary = document.getElementById('salary');
        let iAge = document.getElementById('age');
        let iKey = document.getElementById('key');
        return { name: iName.value, age: iAge.value, salary: iSalary.value, key: iKey.value };
    }

    render() {
        return (
            <div id="modal" className="modal">
                <form className="modal-content row" id="form">
                    <label id='title'></label>
                    <input id="key" type="hidden" name="key" />
                    <div className="input-field col m6">
                        <input id="name" type="text" className="validate" name="name" />
                        <label className="active" htmlFor="name">Nombre</label>
                    </div>
                    <div className="input-field col m6">
                        <input id="salary" type="text" className="validate" name="salary" />
                        <label className="active" htmlFor="salary">Salario</label>
                    </div>
                    <div className="input-field col m6">
                        <input id="age" type="text" min="18" className="validate" name="age" />
                        <label className="active" htmlFor="age">Edad</label>
                    </div>
                </form>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    <a href="#!" className="waves-effect waves-green btn-flat" onClick={this.save.bind(null, this.handleChange)}>Guardar</a>
                </div>
            </div>
        )
    }

    save(callback) {
        var param = callback();
        if (window.action === 1) {

            axios.put(`http://dummy.restapiexample.com/api/v1/update/${param.key}`, param,{ httpsAgent: agent }).then((res) => {
                if (res.status === 200) {
                    M.toast({ html: 'Se Actualizo correctamiente' });
                    window.location.reload();
                } else {
                    M.toast({ html: 'No se pudo actualizar, intente mas tarde' });
                }

            }).catch((err) => {
                M.toast({ html: err });
            });
        } else {
            axios.post(`http://dummy.restapiexample.com/api/v1/create`, param,{ httpsAgent: agent }).then((res) => {
                if (res.status === 200) {
                    M.toast({ html: 'Se Creó correctamiente' });
                    window.location.reload();
                } else {
                    M.toast({ html: 'No se pudo crear, intente mas tarde' });
                }

            }).catch((err) => {
                M.toast({ html: err });
            });
        }
    }
}

export default formEmployee;
