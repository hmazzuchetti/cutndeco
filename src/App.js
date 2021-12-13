import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

// Páginas
import Navbar from './componentes/Navbar/Navbar';
import Cadastro from "./componentes/cadastro/Cadastro";
import Login from "./componentes/login/Login";
import Fotos from "./componentes/fotos/Fotos";
import Home from "./componentes/home/Home";
import ProdutoDetalhes from "./componentes/produtoDetalhes/ProdutoDetalhes";

//store
import { store, persistor } from "../src/store/"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/galeria_de_fotos" element={<Fotos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/produtoDetalhes/:id" element={<ProdutoDetalhes props />} />

            </Routes>
          </Router>
        </PersistGate>
      </Provider>

    </>
  );
}


export default App;
