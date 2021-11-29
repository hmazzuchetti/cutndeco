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



function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/galeria_de_fotos" element={<Fotos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

        </Routes>
      </Router>


    </>
  );
}


export default App;
