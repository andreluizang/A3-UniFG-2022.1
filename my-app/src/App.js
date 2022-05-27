import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login.js'
import Home from "./Pages/Home.js";
import Perfil from "./Pages/Perfil.js";
import PerfilAdmin from "./Pages/AdminProfilePage.js";
import RegisterForm from "../src/Components/Register/RegisterForm.js"
import PrivateRoute from './Components/PrivateRoute.js';
import { history } from './history.js';

function App() {
  return (
    <div className='Login'>
      <Login/>
    </div>
    
    /* 
    <Router history={ history }>
      <Routes>
        <Route path='/Login' element={<Login />} />

        <PrivateRoute path='/' element={<Home />} />

        <PrivateRoute path='/Perfil' element={<Perfil />} />

        <PrivateRoute path='/PerfilAdmin' element={<PerfilAdmin />} />

        <Route path='/Register' element={<RegisterForm />} />
      </Routes>
    </Router>
    */
  );
}

export default App;