import React, { useState, useEffect } from "react";
import CardPerfil from "../Components/CardPerfil/CardPerfil.js";
import Header from "../Components/Header/Header.js";
import "./AdminProfilePage.css";

function AdminProfilePage() {

    const [perfil, setPerfil] = useState([])

    useEffect(() => {
        //aqui vai fazer a busca dos dados na api
    }, [])

    function removeProfile(id){
        //método delete
    }

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
                        <CardPerfil id={1} name={"alguém"} handleRemove={removeProfile}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default AdminProfilePage;