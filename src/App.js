
import './App.css';
import Banner from './Componentes/Banner/banner';
import Banner2 from './Componentes/Banner2/banner2';
import CloudComparison from './Componentes/CloudComparison/cloudComparison';
import Footer from './Componentes/Footer/footer';
import Grafico from './Componentes/Grafico/grafico';
import Header from './Componentes/Header/header';
import Security from './Componentes/Security/security';
import Venda from './Componentes/Venda/venda';

function App() {
  return (
    <div>
    <Header/>
    <Banner/>
    <Banner2/>
    <CloudComparison/>
    <Grafico/>
    <Security/>
    <Venda/>
    <Footer/>
  </div>
  );
}

export default App;
