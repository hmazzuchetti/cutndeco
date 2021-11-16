import React from 'react';
import "./produtonatal.css";

function ProdutoNatal() {
    return (
        <div className="container">
            <div className="texto__produtoNatal">
                <h1>Lembrancinhas de natal</h1>
                <p>Não sabe o que dar de presente? Não se preocupe, nós já pensamos nisso para você. Entre em contato e conheça nossas caixinhas que estão uma gracinha.</p>
                <div className="btns">
                    <button className="btnCaixa">Comprar</button>
                </div>
            </div>
            <div className="foto__produto"></div>
        </div>
    )
}

export default ProdutoNatal
