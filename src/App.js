import './App.css';
import { Container, Row, Col } from 'react-dom';
import NavBar from './Components/Navbar';
import CardInfo from './Components/CardInfo';
import image1 from './img/descarga.png'
import image2 from './img/images.jpg'
import image3 from './img/estado-flujo-efectivo.png'



function App() {
  return (
    <div className="container">
        <NavBar />
        <div className="header-landing">
          <h1>¿Como funciona?</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut magnam eaque est repellat corrupti ratione dolorem officiis animi porro aliquid.</p>
        </div>
        <CardInfo 
        image={image1}
        textInfo='aqui ira algun texto informativo'
        />
        <CardInfo 
        image={image2}
        textInfo='aqui pondremos mas informacion de ocmo funciona la aplicación'
        />
        <CardInfo 
        image={image3}
        textInfo='esta es una prueba de funcionamiento de react, una card'
        />
    </div>
  );
}

export default App;
