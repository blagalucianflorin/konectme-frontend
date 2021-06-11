import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = "https://konectme-backend.herokuapp.com/";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
ReactDOM.render(<App />, document.getElementById('root')
);

