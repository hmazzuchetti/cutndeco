import React, { useState } from 'react'
import "./login.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    function logar() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha).then(userCredential => {
            const user = userCredential.user;
            setMsgTipo("sucesso");
        }).catch(erro => {
            setMsgTipo("erro");
        })
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
                    <button onClick={logar} className="login">Entrar</button>
                    <button className="cadastro"><Link to="./cadastro" >Cadastro</Link></button>
                </div>

                {
                    msgTipo === "sucesso" && <span className="msgTipo">Login efetuado com sucesso!</span>
                }
                {
                    msgTipo === "erro" && <span className="msgTipo">Algo deu errado. Tente novamente mais tarde!</span>
                }



            </div>
        </div>
    )
}

export default Login
