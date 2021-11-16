import React from 'react';
import "./navbar.css";
import logonavbar from "../../img/logo.png";

function Navbar() {
    return (
        <div className="navbar">
            <a>Produtos</a>
            <a>Contato</a>
            <img className="logoNavbar" src={logonavbar} alt="CUT N DECO" />
            <a>Login</a>
            <button className="btn-cadastro"><a>Cadastro</a></button>
        </div>
    )
}

export default Navbar
