import axios from "axios";
import React from "react";
import Delete from "../../assets/Delete.png";
import "./CardPerfil.css";

function CardPerfil({ perfil, getProfile }) {

    const baseURL = "http://localhost:4000"

    function removeProfile(){
        const id = perfil._id

        axios.delete(`${baseURL}/perfil/apagar/${id}`)
        .then(response => {
            window.confirm(JSON.stringify(response.data.message))
        })
        .catch(error => console.error(error));
        getProfile(baseURL);
    };

    return (
        <div className="container-perfil-admin" >
            <span className="perfil-admin">{perfil.nome}</span>
            <span className="imagem-perfil-admin" onClick={removeProfile}>
                <img src={Delete} alt="Apagar" />
            </span>
        </div>
    )
}


export default CardPerfil;