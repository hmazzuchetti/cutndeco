import React, { useState } from 'react'
import "./cadastro.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Cadastro() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    function cadastrar() {

    }

    return (
        <div className="bckgdLogin">
            <div className="containerForm">
                <h1>Bem vindo de volta!</h1>
                <h2>E-mail</h2>
                <input onChange={(e) => setEmail(e.target.value)} className="inputLogin" placeholder=" E-mail" type="email" />
                <h2>Senha</h2>
                <input onChange={(e) => setSenha(e.target.value)} className="inputLogin" placeholder=" Senha" type="password" />
                <a href="#" className="esqueciSenha">Esqueci minha senha...</a>
                <div className="btnsLogin">
                    <button onClick={cadastrar} className="login">Entrar</button>
                    <button className="cadastro">Cadastro</button>
                </div>





            </div>
        </div>
    )
}

export default Cadastro

