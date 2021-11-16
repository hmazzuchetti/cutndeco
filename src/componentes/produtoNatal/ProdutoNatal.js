import React from 'react';
import "./produtonatal.css";
import natal1 from "../../img/Natal/natal1Quadrado.jpg";
import natal2 from "../../img/Natal/natal2Quadrado.jpg";
import natal3 from "../../img/Natal/natal3Quadrado.jpg";
import natal4 from "../../img/Natal/natal4Quadrado.jpg";

function ProdutoNatal() {
    return (
        <div className="container">

            <div className="texto__produtoNatal">

                <p className="pGrande">Procurando presente?</p>
                <p className="pPequeno"> Veja nossas caixinhas de natal!</p>
                <div className="btns">
                    <button className="btnCaixa"><p>Fazer pedido</p></button>
                    <button className="btnCaixa"><p>Ver fotos</p></button>
                </div>
                <div className="cardBckgd"></div>
            </div>
            <div className="foto__produto">
                <img className="imgnatal" alt="Produto Natal 1" src={natal1} />
                <img className="imgnatal" alt="Produto Natal 1" src={natal2} />
                <img className="imgnatal" alt="Produto Natal 1" src={natal3} />
                <img className="imgnatal" alt="Produto Natal 1" src={natal4} />
            </div>
        </div>
    )
}

export default ProdutoNatal
