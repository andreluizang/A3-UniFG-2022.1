import React from 'react';
import './style.css';
function Header() {
    return(
        <nav id="header" class="navbar navbar-light bg-secondary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3"><b>Nome do aplicativo</b></span>
            <p><small><b>Bem-vindo, [nome do usuário]!</b></small></p>
            </div>
        </nav>
    )
}
export default Header;