import React, { Component } from 'react';
import M from "materialize-css";
import Employees from "../src/views/employees";
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {

  componentDidMount() {    
    M.AutoInit();
  }

  render() {
    return (
      <div className="row">
        <div className="col m10 offset-m1">
        <Employees/>
        </div>        
      </div>)
  }
}
export default App;
