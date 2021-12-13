import { React, useState, useEffect } from 'react'
import "./produtodetalhes.css";
import natal1 from "../../img/Natal/natal1Quadrado.jpg";
import natal2 from "../../img/Natal/natal2Quadrado.jpg";
import natal3 from "../../img/Natal/natal3Quadrado.jpg";

import { collection, doc, getDoc } from "firebase/firestore";
import { db, storage, firebase } from "../../firebase/firebase.js";

import { useParams } from 'react-router-dom'


function ProdutoDetalhes() {
    const { id } = useParams();
    const [produtos, setProdutos] = useState({});
    const docRef = doc(db, "produtos", id);



    useEffect(() => {
        const getsnap = async () => {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProdutos(docSnap.data());
                console.log("Dados: ", docSnap.data());
            } else {
                //doc.data() will be undefined
                console.log("No such document");
            }
        }
        getsnap();

    }, [])


    return (

        <div className="container-produto">
            <div className="miniatura-fotos">
                <img src={natal1} alt="" className="miniatura-img" />
                <img src={natal2} alt="" className="miniatura-img" />
                <img src={natal3} alt="" className="miniatura-img" />
            </div>
            <div className="foto-display">
                <img src={produtos.imgUrl} alt="" className="display-img" />
            </div>
            <div className="informacoes">
                <h1>{produtos.titulo}</h1>

                <div className='preco'>
                    <h2>{produtos.preco}</h2>
                    {/* <p>10% off</p> */}
                </div>
                <p>{produtos.detalhes}</p>
                <h3>Pagamento por pix, depósito ou cartão de crédito com juros</h3>
                <h3>Tempo de preparo: Á Combinar.</h3>
                <div className="btns-comprar-carrinho">
                    <button>Comprar agora</button>
                    {/* <button>Adicionar ao carrinho</button> */}
                </div>
            </div>
        </div>

    )
}

export default ProdutoDetalhes
