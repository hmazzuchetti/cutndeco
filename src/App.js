import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Hero from './componentes/hero/Hero';
import ProdutoNatal from './componentes/produtoNatal/ProdutoNatal';
import TrabalhosFeitos from './componentes/trabalhosFeitos/TrabalhosFeitos';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProdutoNatal />
      <TrabalhosFeitos />
      <div className="App">

      </div>
    </>
  );
}

export default App;
