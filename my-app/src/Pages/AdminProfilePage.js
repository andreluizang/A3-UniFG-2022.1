import axios from 'axios';
import React, { useState, useEffect } from "react";
import CardPerfil from "../Components/CardPerfil/CardPerfil.js";
import Header from "../Components/Header/Header.js";
import "./AdminProfilePage.css";

function AdminProfilePage() {
    const [perfil, setPerfil] = useState([])
    
    const baseURL = "http://localhost:4000"
    
    function getProfile(URL) {
        axios.get(`${URL}/perfil`)
            .then(response => {
                console.log(response.data)
                setPerfil(response.data || null)
            })
            .catch(error => {
                console.log(error)
                alert(JSON.stringify(error.response.data.message))
            })
    };

    useEffect(() => {
        getProfile(baseURL)
    }, [])

    return (
        <div className="container-admin-page">
            <div className="admin-profile-page">
                <header>
                    <Header/>
                </header>

                <div className="content">
                    <div className="texto">
                        <span>Perfis cadastrados:</span>
                    </div>
                    <div className="card-perfil">
                        {perfil.map(p => <CardPerfil perfil={p} get={getProfile} />)}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default AdminProfilePage;