import React, { useEffect, useState } from 'react';
import './style.css';
import Contagem from './ContagemFilmes.js';
import Lista from './ListaFilmes.js';
import axios from 'axios';

function HomePage() {
    const [filme, setFilme] = useState([])

    const baseURL = "http://localhost:4000"

    function getFilme(URL){
        axios.get(`${URL}/filme`)
            .then(response => {
                console.log(response.data)
                setFilme(response.data || null)
            })
            .catch(error => {
                console.log(error)
                alert(JSON.stringify(error.response.data.message))
            })
    }

    function deleteFilm(id){
            axios.delete(`${baseURL}/filme/apagar/${id}`).then(res=> {
                alert(JSON.stringify(res.data.message))
                getFilme(baseURL);
            })
            .catch(error => {
                console.error(error)
                alert(JSON.stringify(error.response.data.message))
            });
    
    }
    useEffect(() => {
        getFilme(baseURL)
    }, [])

    return (
        <body>
           
                <div className='principal'>
                    <div className="Contagem">
                        <Contagem/>
                    </div>
                    <div className='Listadefilmes'>
                    {filme.map(p => <Lista filme={filme} deleteFilm={deleteFilm}/>)}

                    </div>
                   
                </div>
        
        </body>

    )
}

export default HomePage;