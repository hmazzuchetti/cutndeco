import React from 'react';
import "./hero.css";

function Hero() {
    return (
        <div className="hero">
            <div className="bckgd"> {/*CAPA DE FUNDO*/} </div>

            <h1>O natal já chegou</h1>
            <h2>Confira os presentes que preparamos para você</h2>
            <div className="btns">
                <button className="btnHero"><a>Ver produtos</a></button>
                <button className="btnHero"><a>Contato</a></button>
            </div>
        </div>
    )
}

export default Hero
