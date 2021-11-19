import React from 'react';
import "./TrabalhosFeitos.css";
import outubrorosa1 from "../../img/outubrorosa/outubrorosa1.jpg";
import outubrorosa2 from "../../img/outubrorosa/outubrorosa2.jpg";
import outubrorosa3 from "../../img/outubrorosa/outubrorosa3.jpg";
import outubrorosa4 from "../../img/outubrorosa/outubrorosa4.jpg";
import outubrorosa5 from "../../img/outubrorosa/outubrorosa5.jpg";
import CRAPR from "../../img/CRAPR.png"

function TrabalhosFeitos() {
    return (
        <>
            <div className="header">
                <h1 className="titulo">
                    Trabalhos feitos
                </h1>
            </div>
            <div className="containerOutubroRosa">

                <div className="container-produtos">

                    <div className="outubro--rosa">
                        <div className="title">
                            <h1 className="rosa">Kit</h1>
                            <h1 className="outubro">Outubro </h1>
                            <h1 className="rosa">Rosa</h1>
                        </div>
                    </div>

                    <img src={outubrorosa1} alt="" className="img--outubro--rosa--1" />
                    <img src={outubrorosa2} alt="" className="img--outubro--rosa--2" />
                    <img src={outubrorosa3} alt="" className="img--outubro--rosa--3" />
                    <img src={outubrorosa4} alt="" className="img--outubro--rosa--4" />
                    <img src={outubrorosa5} alt="" className="img--outubro--rosa--5" />


                </div>

            </div>
            <div className="divcliente">
                <h1 className="cliente">Cliente:</h1>
                <img className="logoCra" src={CRAPR} alt="CRA - Paraná" />
                <button className="pecaja">Peça já!</button>
            </div>

        </>
    )
}

export default TrabalhosFeitos
