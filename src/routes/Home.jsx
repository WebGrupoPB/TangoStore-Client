import React from 'react';
import { Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import Footer from '../components/Footer';
import Decoradores from '../components/Decoradores';
import './styles/Home.css';




const dataHero = [
  {
    id: 0,
    img: 'https://i.ibb.co/gTvX3TP/3.png',
  },
  {
    id: 1,
    img: 'https://i.ibb.co/8PC5JM3/3.png',
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
    text: "DISFRUTA NUESTRA NUEVA DELICIOSA PIZZA VEGGIE",
    img: 'https://i.ibb.co/f0mbRC5/2.png',
  },
  {
    id: 1,
    text: "SABOREA NUESTRO MILK SHAKE DE CHOCOLATE",
    img: 'https://i.ibb.co/GCJ2YV3/1.png',
  },
];



const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        
        <Decoradores />


        <div className='hero-space'>
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

        <section className='food-section'>

          <Slider dataSlider={dataPromotions} panelInfo='promotions' />
                  
        </section>

        <section className='ubicacion-section'>

          <div className='ubi-info'>
            <h1>¿Dónde encontrarnos?</h1>
            <div>
              <p><b>¡Emocionantes noticias!</b></p>
              <p>
                Nos complace anunciar la apertura de
                nuestra nueva tienda en una ubicación
                conveniente y de fácil acceso.
              </p>

              <a href="https://www.google.com/maps/search/Tango+Store/@14.6294877,-91.6623839,9z/data=!3m1!4b1?entry=ttu" target='_blank'>
                <span><img src="./src/assets/icons/Map Marker.png" alt="google-map-icon" />Como LLegar</span>
              </a>
            </div>
            
          </div>

          <div className='ubi-image'>
            <img src="https://i.ibb.co/w7FffsP/mapa.png" alt="mapa-guatemala" />
          </div>

        </section>

        <section className='servicios-section'>
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