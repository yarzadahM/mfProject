import React from 'react'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import Store from './store'
import Routing from './routes/Routing'

import "./index.css";

const App=() =>{
  return (
<Routing/>  
  );
}


ReactDOM.render( <Provider store={Store}>
  <App />
  </Provider>, document.getElementById("app"));


