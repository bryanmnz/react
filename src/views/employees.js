import React, { Component } from 'react';
import M from "materialize-css";
import Forms from './modal-employees';
const axios = require('axios');

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
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
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
                    {this.state.data.map((employee, index) => {
                        return <tr>
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
                        </tr>
                    })}
                </table>
                <div class="fixed-action-btn">
                    <a className="btn-floating btn-large green modal-trigger" href="#modal" onClick={this.create}>
                        +
                    </a>
                </div>

                <Forms />

            </div>
        )
    }



    edit(id) {
        
        axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
            .then((res) => {                
                
            })
            .catch((err) => {
                M.toast({ html: err });
            });

    }

    delete(id) {
        axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`, {

        }).then((res) => {
            if (res.status === 200) {
                M.toast({ html: 'Se elimino correctamiente' });
            } else {
                M.toast({ html: 'No se pudo eliminar, intente mas tarde' });
            }

        }).catch((err) => {
            alert(err)
        });
    }
    create() {
    }
    update() { }
    getById() { }

}

export default listEmployees;