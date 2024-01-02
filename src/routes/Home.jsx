import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import Footer from '../components/Footer';
import Decoradores from '../components/Decoradores';
import Popup from '../components/AnuncioPopup';
import Galleria from '../components/Carrusel';
import Snow from '../components/snow';
import './styles/Home.css';


import mapMarker from "../assets/icons/Map Marker.png"
import chilliDog from "../../public/home/chilli dog transparente.png"



import mapaGuate from "../../public/home/mapa-guate.png"
import autoGo from "../../public/home/AutoGo_logo.png"
import grabGo from "../../public/home/Grab&Go_logo.png"


import iconTango1 from "../../public/home/Iconos_tango1.png"
import iconTango2 from "../../public/home/Iconos_tango2.png"
import iconTango3 from "../../public/home/Iconos_tango3.png"
import iconTango4 from "../../public/home/Iconos_tango4.png"






const dataHero = [
  {
    id: 0,
    img: 'https://s3.amazonaws.com/tango.store/home/slider1/slider-home1.png',
  },
  {
    id: 1,
    img: 'https://s3.amazonaws.com/tango.store/home/slider1/slider-home2.png',
  },
  {
    id: 2,
    img: 'https://s3.amazonaws.com/tango.store/home/slider1/slider-home3.png',
  },
  {
    id: 3,
    img: 'https://s3.amazonaws.com/tango.store/home/slider1/slider-home4.png',
  },
];

const dataPromotions = [
  {
    id: 0,
    text: "¡Prueba nuestro combo navideño!",
    img: "https://s3.amazonaws.com/tango.store/general/temporadaNavide%C3%B1a/sliderpromo-1.png",
  },
  {
    id: 1,
    text: "Frappé chocomenta el sabor de la Navidad",
    img: "https://s3.amazonaws.com/tango.store/general/temporadaNavide%C3%B1a/sliderpromo-2.png",
  },
  {
    id: 2,
    text: "Un croissant, una explosión de sabor en cada mordida",
    img: "https://s3.amazonaws.com/tango.store/general/temporadaNavide%C3%B1a/sliderpromo-3.png",
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


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Decoradores />

        
        {/* Mostrar el Popup si showPopup es verdadero */}
        {/* {showPopup && (
          <Popup handleClosePopup={handleClosePopup} />
        )} */}

        <div className='hero-space' id="hero-space">
          <section className='hero-slider'>

            <Slider dataSlider={dataHero} panelInfo='heroHome' />

          </section>
        </div>      

        <section className='ver-menu'>

          <div className='text-tandog'>
            <h2>Conoce nuestro menú y elige tu favorito</h2>
            <Link to={'/menu'} onClick={scrollToTop}><span className='verMenuBtn'>ver menú</span></Link>
          </div>

          <div className='tango-fondo'>
            <img src="https://s3.amazonaws.com/tango.store/general/temporadaNavide%C3%B1a/verMenu-img.png" alt="tandog" loading='lazy' />
          </div>     

        </section>

        <section className='carrusel-puntosTango'>
          <Galleria />
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
            <img src={mapaGuate} alt="mapa-guatemala" />
          </div>

        </section>

        <section className='videoPromo-section'>

          <div className='GrabGo-div'>            

            <div className='iframe-GrabGo'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/bvmSKHkJ7fw?si=QK_QYPIEEXbQpJOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='videoGrabgo'></iframe>     
            </div>

            <div className='text-Grabgo'>
              <span><img src={grabGo} alt="" className='grabgo-logoimg' /></span>

              <p>
                Descubre la comodidad sin igual de nuestro <b>"Grab & Go" </b> 
                Comida lista para <b>calentar</b> en <b>minutos</b>.
              </p>

              <p><b>Ingredientes frescos</b> y sabores excepcionales.</p>
              
              <p>Satisfacción instantánea para tu paladar.</p>

              <h4>¡Visítanos y disfruta de la mejor comida en segundos!</h4>
            </div>

          </div>

          <div className='AutoGo-div'>

            <div className='text-Autogo'>
              <span><img src={autoGo} alt="" className='autogo-logoimg' /></span>

              <p>Bienvenido a Autogo donde el <b>sabor</b> y <b>rapidez</b> se encuentran</p>

              <p>
                Sin <b>esperar</b> largas <b>filas</b> y en la comodidad de tu vehículo
                solo ingredientes de primera calidad y sabores excepcionales.
              </p>

              <p>Nuestro menú se renueva constantemente para mantenerte emocionado.</p>

              <h4>¡Ven y descubre la mejor comida al instante!</h4>
            </div>

            <div className='iframe-AutoGo'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Zk36t5UAxhw?si=am4-dkfaHGgM_NuH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='videoAutoGo'></iframe>

            </div>

          </div>

        </section>

        <section className='servicios-section'  id='servicios'>
          <h1>Servicios Disponibles</h1>

          <div>
            <img src={iconTango1} alt="disponible 24/7" />
            <img src={iconTango2} alt="para llevar" />
            <img src={iconTango3} alt="cajeros" />
            <img src={iconTango4} alt="baños" />
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