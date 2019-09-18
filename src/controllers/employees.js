import React, { Component } from 'react';
const axios = require('axios');

class listEmployees extends Component {
    constructor(){
        super();
        this.state = { "data":[]}
    }
    componentDidMount() {
        this.getUser();
    }

    getUser() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((res) => {
                this.setState({ data: res.data });
                console.log(this.state.data);
            })
            .catch((err) => {
                this.setState({ err: err });
            });
        ;
    }

    render() {
        return (
            <ul>
                {this.state.data.map((employee, index) => {
                    return <li>{employee.id}</li>;
                })}
            </ul>
        )
    }

}

export default listEmployees;