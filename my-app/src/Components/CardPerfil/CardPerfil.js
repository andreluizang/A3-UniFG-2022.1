import React from "react";
import Delete from "../../assets/Delete.png";
import "./CardPerfil.css";

function CardPerfil({ id, name, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className="container-perfil-admin" >
            <span className="perfil-admin">{name}</span>
            <span className="imagem-perfil-admin" onClick={remove}>
                <img src={Delete} alt="Apagar" />
            </span>
        </div>
    )
}


export default CardPerfil;