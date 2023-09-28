import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import Footer from '../components/Footer';
import Decoradores from '../components/Decoradores';
import Popup from '../components/AnuncioPopup';
import './styles/Home.css';


import mapMarker from "../assets/icons/Map Marker.png"
import autoGo from "../../public/AutoGo_logo.png"
import grabGo from "../../public/Grab&Go_logo.png"



const dataHero = [
  {
    id: 0,
    img: 'https://i.ibb.co/gTvX3TP/3.png',
  },
  {
    id: 1,
    img: 'https://i.ibb.co/HXcj1Rr/2.png',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/cyFhzSc/4.png',
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

        <section className='videoPromo-section'>

          <div className='GrabGo-div'>            

            <div className='iframe-GrabGo'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DQqsOyBLz78?si=4fgg2VQuUKLuCuf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='videoGrabgo'></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/X6q9zfrRujk?si=OO_zt2juqIG7-m6I&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='videoAutoGo'></iframe>
            </div>

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