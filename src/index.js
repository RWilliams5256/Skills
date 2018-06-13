import React from "react";
import ReactDOM from 'react-dom';
import routes from './config/routes';
import registerServiceWorker from './registerServiceWorker';


const rootElement = document.getElementById("root");

ReactDOM.render(

   routes,
  rootElement);
registerServiceWorker();
