import React, {useState} from 'react';
import './style.css';
import UltimoFilme from './UltimoFilme.js';
import Diretor from'./DiretorMaisVisto.js';
import Genero from './GeneroMaisVisto.js';
import Contagem from './ContagemFilmes.js';

function HomePage(props) {
    const [state , setState] = useState({
        usuario : "",
        email : "",
        password : "",
        confirmPassword: "",
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    return(
        <div id="homepg" className="card col-12 col-sm-12 login-card mt-2 hv-center">
            <UltimoFilme/>
            <Contagem/>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
            Assisti a um filme!
            </button>
            <Diretor/>
            <Genero/>
        </div>
    )
}

export default HomePage;