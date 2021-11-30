import React, { useState, useEffect } from 'react';
import "./CardsProdutos.css"
import imgCard from "../../img/Peppa pig/peppa6.jpg"
import imgCard2 from "../../img/Natal/natal1.jpg"
import imgCard3 from "../../img/Natal/natal2.jpg"
import imgCard4 from "../../img/Natal/natal3.jpg"
import imgCard5 from "../../img/Natal/natal5.jpg"

import { db } from "../../firebase/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { setUserId } from '@firebase/analytics';


function CardsProdutos({ titulo, preco, tipo }) {

    const [produtos, setProdutos] = useState([]);
    const produtosCollectionRef = collection(db, "produtos");

    useEffect(() => {
        const getProdutos = async () => {
            const data = await getDocs(produtosCollectionRef);
            setProdutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        getProdutos()
    }, [])



    return (
        <div className="card">
            <div className="imgBx">
                <img src={imgCard2} alt="Imagem Card" className="imgCard" />
                <ul className="action">
                    <li>
                        <a className="linkCompra" href="https://api.whatsapp.com/send?phone=5544998103419" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </a>
                        <span>Comprar produto</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Mais fotos</span>
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="ProductName">
                    <h3>{titulo}</h3>
                </div>
                <div className="price">
                    <h2>{preco}</h2>
                    <div className="productType">
                        <h3>{tipo}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsProdutos
