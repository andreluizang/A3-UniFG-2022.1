import React, { useState } from "react";
import foto_de_perfil from "../../assets/Foto_de_perfil.png";
import voltar from "../../assets/Voltar.png";
import "./Perfil.css";

function Perfil() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleDeleteClick = (e) => {
        e.preventDefault();
    }

    const handleSaveClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="container-perfil">
                <div className="wrap-perfil">
                    <form className="perfil">

                        <span className="link-home">
                            <img src={voltar} alt="Voltar" />
                        </span>

                        <span className="imagem-perfil">
                            <img src={foto_de_perfil} alt="Foto de perfil" />
                        </span>

                        <div className="wrap-input">
                            <span>Nome:<br></br></span>
                            <input
                                className="input"
                                type="text"
                                placeholder={nome}
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>

                        <div className="wrap-input">
                            <span>Email:<br></br></span>
                            <input
                                className="input"
                                type="email"
                                placeholder={email}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="wrap-input">
                            <span>Senha:<br></br></span>
                            <input
                                className="input"
                                type="password"
                                placeholder={password}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="container-perfil-btn">
                            <button
                                className="perfil-save-btn"
                                onClick={handleSaveClick}
                            >
                                Salvar Alterações
                            </button>

                            <button
                                className="perfil-delete-btn"
                                onClick={handleDeleteClick}
                            >
                                Apagar perfil
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Perfil;