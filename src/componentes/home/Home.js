import { React, useState, useEffect } from 'react';
import Hero from '../hero/Hero';
import TrabalhosFeitos from '../trabalhosFeitos/TrabalhosFeitos';
import ProdutoNatal from '../produtoNatal/ProdutoNatal';
import CardsProdutos from '../cardsProdutos/CardsProdutos';

import { db, storage } from "../../firebase/firebase.js";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

import "./home.css";
import { useSelector } from 'react-redux'

function Home() {
    const usuarioLogado = useSelector(state => state.usuarioEmail);

    const [newTitulo, setNewTitulo] = useState("");
    const [newTipo, setNewTipo] = useState("");
    const [newPreco, setNewPreco] = useState("");
    const [newImgUrl, setNewImgUrl] = useState("");
    const [newDetalhes, setNewDetalhes] = useState("");

    const [produtos, setProdutos] = useState([]);
    const produtosCollectionRef = collection(db, "produtos");
    const [progress, setProgress] = useState(0);

    //Upload das fotos
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        uploadFiles(file);
    }

    const uploadFiles = async (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/fotos/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(prog);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => setNewImgUrl(url));
            }
        );
    }

    const criarProdutos = async () => {
        console.log(newTitulo, newTipo, newImgUrl, newDetalhes);
        if (newTitulo != "" && newTipo != "" && newTipo != "" && newImgUrl != "" && newDetalhes != "") {
            await addDoc(produtosCollectionRef, { titulo: newTitulo, tipo: newTipo, preco: newPreco, detalhes: newDetalhes, imgUrl: newImgUrl });
            window.location.reload();
        }
        else alert("Preencha todos os campos");



    }

    const deleteProduto = async (id) => {
        await deleteDoc(doc(db, "produtos", id));
        window.location.reload();
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
                        <div className="formAddProduto">
                            <h3>Título:</h3><input placeholder="Titulo" onChange={(event) => { setNewTitulo(event.target.value); }} />
                            <h3>Tipo:</h3><input placeholder="Tipo" onChange={(event) => { setNewTipo(event.target.value); }} />
                            <h3>Preço:</h3><input placeholder="Preço" onChange={(event) => { setNewPreco(event.target.value); }} />
                            <h3>Detalhes:</h3><input placeholder="Detalhes" onChange={(event) => { setNewDetalhes(event.target.value); }} />
                            <h3>Título:</h3><input type="file" className="inputPdf" onChange={formHandler} />

                            {progress === 100 ?
                                newImgUrl != "" ?
                                    <>
                                        <div className="downloadFile">
                                            <p>Imagem carregada com sucesso!</p>
                                            <button onClick={criarProdutos}>Adicionar produto</button>
                                        </div>
                                    </>
                                    :
                                    null
                                :
                                null
                            }
                        </div>
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
                                    <CardsProdutos titulo={produtos.titulo} tipo={produtos.tipo} preco={produtos.preco} imgUrl={produtos.imgUrl} id={produtos.id} />
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
