import Foto_de_perfil from "../../assets/Foto_de_perfil.png"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <nav className="container">
                <div className="item">
                    <a href="/"><strong>M15</strong></a>
                </div>


                <div className="item">
                    <img src={Foto_de_perfil} alt="Foto de perfil" />
                </div>
            </nav>
        </div>
    )
}

export default Header;