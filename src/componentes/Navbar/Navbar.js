import React from 'react';
import "./navbar.css";
import logonavbar from "../../img/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Inicio</Link>

            <a>Produtos</a>
            <img className="logoNavbar" src={logonavbar} alt="CUT N DECO" />
            <Link to="/login">Login</Link>

            <Link to="/cadastro">Cadastro</Link>
        </div>
    )
}

export default Navbar
