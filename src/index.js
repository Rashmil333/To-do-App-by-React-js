import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// import Dwebsite from "./Dwebsite";
import Todo from "./Todo";


import $ from 'jquery';
import Popper from 'popper.js';






ReactDOM.render(<>

	<Todo/>
			
	
	
	
	</>
 ,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
