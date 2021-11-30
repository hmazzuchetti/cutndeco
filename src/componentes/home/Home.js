import { React, useState, useEffect } from 'react';
import Hero from '../hero/Hero';
import TrabalhosFeitos from '../trabalhosFeitos/TrabalhosFeitos';
import ProdutoNatal from '../produtoNatal/ProdutoNatal';
import CardsProdutos from '../cardsProdutos/CardsProdutos';
import { db } from "../../firebase/firebase.js";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import "./home.css";
import { useSelector } from 'react-redux'

function Home() {
    const usuarioLogado = useSelector(state => state.usuarioEmail);

    const [newTitulo, setNewTitulo] = useState("");
    const [newTipo, setNewTipo] = useState("");
    const [newPreco, setNewPreco] = useState("");

    const [produtos, setProdutos] = useState([]);
    const produtosCollectionRef = collection(db, "produtos");

    const criarProdutos = async () => {
        await addDoc(produtosCollectionRef, { titulo: newTitulo, tipo: newTipo, preco: newPreco });
    }

    const deleteProduto = async (id) => {
        await deleteDoc(doc(db, "produtos", id));
    }

    useEffect(() => {
        const getProdutos = async () => {
            const data = await getDocs(produtosCollectionRef);
            setProdutos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        getProdutos()
    }, [])
    return (
        <>
            <Hero />
            <ProdutoNatal />
            {
                usuarioLogado === "henrique.mazzu@gmail.com" ?
                    <>
                        <input placeholder="Titulo..." onChange={(event) => { setNewTitulo(event.target.value); }} />
                        <input placeholder="Tipo..." onChange={(event) => { setNewTipo(event.target.value); }} />
                        <input placeholder="Preço..." onChange={(event) => { setNewPreco(event.target.value); }} />
                        <button onClick={criarProdutos}>Adicionar produto</button>
                    </>
                    :
                    null
            }


            <div className="bodyCards">
                <div className="containerCards">
                    {

                        produtos.map((produtos) => {
                            return (
                                <div>
                                    <CardsProdutos titulo={produtos.titulo} tipo={produtos.tipo} preco={produtos.preco} />
                                    {
                                        usuarioLogado === "henrique.mazzu@gmail.com" ?
                                            <button className="botaoDelete" onClick={() => { deleteProduto(produtos.id) }}>Apagar</button>
                                            :
                                            null
                                    }

                                </div>
                            )
                        })}
                </div>
            </div>

            <TrabalhosFeitos />

        </>
    )
}

export default Home
