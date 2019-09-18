import React, { Component } from 'react';
import M from "materialize-css";
import Employees from "../src/controllers/employees";
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {

  componentDidMount() {
    
    M.AutoInit();
  }

  render() {
    return (
      <div className="row">
        <div className="col m10 offset-m1">Hola mundo</div>
        <Employees/>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
           </p>
          
            
        </header>
      </div>)
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
