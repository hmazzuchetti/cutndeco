import React from 'react';
import "./navbar.css";
import logonavbar from "../../img/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    const logado = useSelector(state => state.usuarioLogado);
    const usuarioLogado = useSelector(state => state.usuarioEmail);
    const dispatch = useDispatch();

    return (
        <div className="navbar">

            <Link className="navItem" to="/">Inicio</Link>

            <a>Produtos</a>
            <img className="logoNavbar" src={logonavbar} alt="CUT N DECO" />

            {
                logado > 0 ?
                    <>
                        <h1 className="usuariologado">{usuarioLogado}</h1>
                        <h1 className="sair" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</h1>
                    </>
                    :
                    <>
                        <Link className="navItem" to="/login">Login</Link>
                        <Link className="navItem" to="/cadastro">Cadastro</Link>
                    </>
            }



        </div>
    )
}

export default Navbar
