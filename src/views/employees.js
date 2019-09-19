import React, { Component } from 'react';
import M from "materialize-css";
import Forms from './modal-employees';
const https = require('https');
const axios = require('axios');
const agent = new https.Agent({
    rejectUnauthorized: false
});
class listEmployees extends Component {
    constructor() {
        super();
        this.state = { "data": [] }
    }
    componentDidMount() {
        this.getUser();
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {});
        });
    }

    getUser() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees', { httpsAgent: agent })
            .then((res) => {
                this.setState({ data: res.data });
            })
            .catch((err) => {
                this.setState({ err: err });
            });
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Salario</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((employee, index) => {
                            return (<tr>
                                <td>{employee.id}</td>
                                <td>{employee.employee_name}</td>
                                <td>{employee.employee_salary}</td>
                                <td>{employee.employee_age}</td>
                                <td>
                                    <a className="btn" onClick={this.edit.bind(null, employee.id)} href="#">
                                        edit
                            </a>
                                    <a className="btn red" onClick={this.delete.bind(null, employee.id)} data-id={employee.id} href="#">
                                        Delete
                            </a>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large green modal-trigger" href="#modal" onClick={this.create}>
                        +
                    </a>
                </div>

                <Forms />

            </div>
        )
    }



    edit(id) {
        var elem = document.querySelector('.modal');
        let iName = document.getElementById('name');
        let iSalary = document.getElementById('salary');
        let iAge = document.getElementById('age');
        let iKey = document.getElementById('key');
        axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`, { httpsAgent: agent })
            .then((res) => {
                if (res.status === 200) {
                    iName.value = res.data.employee_name;
                    iSalary.value = res.data.employee_salary;
                    iAge.value = res.data.employee_age;
                    iKey.value = res.data.id;
                    M.Modal.getInstance(elem).open();
                    window.action = 1;
                    document.getElementById('title').innerHTML = 'Editar';
                } else {
                    throw new Error("Error al traer la informacion");
                }
            })
            .catch((err) => {
                M.toast({ html: err });
            });

    }
    create(){
        window.action = 0;
        document.getElementById("form").reset();
        document.getElementById('title').innerHTML = 'Crear';
    }
    delete(id) {
        axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {

        }, { httpsAgent: agent }).then((res) => {
            if (res.status === 200) {
                M.toast({ html: 'Se elimino correctamiente' });
                window.location.reload();
            } else {
                M.toast({ html: 'No se pudo eliminar, intente mas tarde' });
            }

        }).catch((err) => {
            alert(err)
        });
    }

}

export default listEmployees;