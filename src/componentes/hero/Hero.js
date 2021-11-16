import React from 'react';
import "./hero.css";

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="bckgd"> {/*CAPA DE FUNDO*/} </div>

                <h1>O natal já chegou</h1>
                <h2>Confira os presentes que preparamos para você</h2>
                <div className="btns">
                    <button className="btnHero"><a>Ver produtos</a></button>
                    <button className="btnHero"><a>Contato</a></button>
                </div>
            </div>

            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(248, 218, 223)" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,192C840,213,960,235,1080,240C1200,245,1320,235,1380,229.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

        </>
    )
}

export default Hero
