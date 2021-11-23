import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Hero from './componentes/hero/Hero';
import ProdutoNatal from './componentes/produtoNatal/ProdutoNatal';
import TrabalhosFeitos from './componentes/trabalhosFeitos/TrabalhosFeitos';
import CardsProdutos from './componentes/cardsProdutos/CardsProdutos';


function App() {
  return (
    <>
      <div >
        <Navbar />
        <Hero />
        <ProdutoNatal />
        <CardsProdutos />
        <TrabalhosFeitos />
      </div>
    </>
  );
}


export default App;
