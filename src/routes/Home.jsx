import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import Footer from '../components/Footer';
import Decoradores from '../components/Decoradores';
import Popup from '../components/AnuncioPopup';
import './styles/Home.css';


import mapMarker from "../assets/icons/Map Marker.png"


const dataHero = [
  {
    id: 0,
    img: 'https://i.ibb.co/HxBCLGF/Slider-Home1.png',
  },
  {
    id: 1,
    img: 'https://i.ibb.co/tcmv14S/Slider-Home2.png',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/HXcj1Rr/2.png',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/4VKLHbd/5.png',
  },
];

const dataPromotions = [
  {
    id: 0,
    text: "¡Prueba nuestros nuevos Milk shake!",
    img: 'https://i.ibb.co/b7xN9mZ/1.png',
  },
  {
    id: 1,
    text: "Milk Shake de Fresa, Chocolate y Chicle",
    img: 'https://i.ibb.co/cwDfD2Z/2.png',
  },
  {
    id: 2,
    text: "Disfruta de nuestras deliciosas pizzas Carnívora y Lomito",
    img: 'https://i.ibb.co/k31zXjD/Promociones-2.png',
  }, 
  {
    id: 3,
    text: "Disfruta de nuestras deliciosas pizzas Veggie y Chipotle",
    img: 'https://i.ibb.co/6BNPYBN/3.png',
  },
];



const Home = () => {

   // Estado para controlar la visibilidad del Popup
   const [showPopup, setShowPopup] = useState(false);

   // Efecto para mostrar el Popup después de 5 segundos
   useEffect(() => {
     const popupTimer = setTimeout(() => {
       setShowPopup(true);
     }, 5000); // 5000 milisegundos (5 segundos)
 
     // Limpieza del temporizador cuando se desmonta el componente
     return () => {
       clearTimeout(popupTimer);
     };
   }, []); // El segundo argumento, un array vacío, asegura que el efecto solo se ejecute una vez al montar el componente.
 
   // Función para cerrar el Popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        
        <Decoradores />

        
        {/* Mostrar el Popup si showPopup es verdadero */}
        {showPopup && (
          <Popup handleClosePopup={handleClosePopup} />
        )}

        <div className='hero-space' id="hero-space">
          <section className='hero-slider'>

            <Slider dataSlider={dataHero} panelInfo='heroHome' />

          </section>
        </div>

        
        

        <section className='ver-menu'>

          <div className='text-tandog'>
            <h2>Conoce nuestro menú y elije tu favorito</h2>
            <Link to={'/menu'}><span className='verMenuBtn'>ver menú</span></Link>
          </div>

          <div className='tango-fondo'>
            <img src="https://i.ibb.co/JmNr11J/hot-dog.png" alt="tandog" loading='lazy' />
          </div>     

        </section>

        <section className='food-section' id='promociones'>

          <Slider dataSlider={dataPromotions} panelInfo='promotions' />
                  
        </section>

        <section className='ubicacion-section'>

          <div className='ubi-info'>
            <h1>¿Dónde encontrarnos?</h1>
            <div>
              <p><b>¡Emocionantes noticias!</b></p>
              <p>
                Encuéntranos en las ubicaciones más convenientes y tan cerca de ti.
              </p>

              <a href="https://www.google.com/maps/search/Tango+Store/@14.6294877,-91.6623839,9z/data=!3m1!4b1?entry=ttu" target='_blank'>
                <span><img src={mapMarker} alt="google-map-icon" />Como LLegar</span>
              </a>
            </div>
            
          </div>

          <div className='ubi-image'>
            <img src="https://i.ibb.co/w7FffsP/mapa.png" alt="mapa-guatemala" />
          </div>

        </section>

        <section className='servicios-section'  id='servicios'>
          <h1>Servicios Disponibles</h1>

          <div>
            <img src="https://i.ibb.co/9NHgwdC/4.png" alt="disponible 24/7" />
            <img src="https://i.ibb.co/rGjZMV8/3.png" alt="para llevar" />
            <img src="https://i.ibb.co/NVBTXjh/2.png" alt="cajeros" />
            <img src="https://i.ibb.co/cYkbKMx/1.png" alt="baños" />
          </div>
        </section>

        <section className='footerHome'>
          <Footer />
        </section> 

      </main>


    </div>

  );
};

export default Home;