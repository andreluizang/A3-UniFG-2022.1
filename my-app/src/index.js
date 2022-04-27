import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import RegisterForm from './Components/Register/RegisterForm';
import PerfilPage from './Perfil';

ReactDOM.render(
  <React.StrictMode>
    <PerfilPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
