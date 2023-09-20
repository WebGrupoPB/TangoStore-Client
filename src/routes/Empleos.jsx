import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import Footer from '../components/Footer';
import Decoradores from '../components/Decoradores';
import ProfileCards from '../components/ProfileCard';

import './styles/Empleos.css';



import instagramPng from '../assets/icons/instagram.png'
import facebookPng from '../assets/icons/facebook.png'
import trianguloPng from '../assets/icons/tango-triangulo.png'



const dataHero1 = [
  {
    id: 0,
    img: 'https://i.ibb.co/WgM6s2V/IMG-9848.jpg',
  },
];


const dataHero2 = [
  {
    id: 0,
    img: 'https://i.ibb.co/Jxh4ghW/primer-plano-arbusto-verde.jpg',
  },
];


const dataCards1 = [
  {
      img: 'https://i.ibb.co/8gZNC4L/Funciones-de-un-encargado-de-tienda-1140x642.jpg',
      puesto: 'Gerente de Tienda',
      description: 'Responsable de la operación general de la tienda, la gestión del personal, la planificación de inventario y la toma de decisiones estratégicas.',
  },
  {
      img: 'https://i.ibb.co/dpby99w/31496529-gerente-de-la-tienda-feliz-celebraci-n-de-sus-pulgares-para-arriba-en-un-supermercado.jpg',
      puesto: 'Encargado de departamento',
      description: 'Responsable de un departamento específico, como comestibles, productos frescos, productos congelados, etc.',
  },
  {
    img: 'https://i.ibb.co/3kHfTgm/limpieza-tienda.jpg',
    puesto: 'Empleado de limpieza',
    description: 'Mantiene la tienda limpia y ordenada, realiza labores de limpieza y saneamiento.',
  },
];

const dataCards2 = [
  {
      img: 'https://i.ibb.co/8gZNC4L/Funciones-de-un-encargado-de-tienda-1140x642.jpg',
      puesto: 'Subgerente de Tienda',
      description: 'Ayuda al gerente en la supervisión diaria y puede encargarse de la tienda en ausencia del gerente.',
  },
  {
      img: 'https://i.ibb.co/WpxDv7N/Getty-Images-478971338-1.jpg',
      puesto: 'Cajero',
      description: 'Procesa las transacciones de compra de los clientes y brinda un servicio amable y eficiente.',
  },
  {
    img: 'https://i.ibb.co/8Mmq1zX/1660317335289.jpg',
    puesto: 'Almacenamiento',
    description: 'Gestiona el almacenamiento y la organización de productos en el almacén.',
},

];




const Empleos = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        
        <Decoradores />


        <div className='hero-spaceEmpleos'>
          <section className='hero-sliderEmpleos'>

          <Slider dataSlider={dataHero1} panelInfo='heroEmpleos' /> 

          </section>
        </div>

        <div className='hero-spaceEmpleos'>
          <section className='hero-sliderEmpleos2'>      
            <Slider dataSlider={dataHero2} panelInfo='heroEmpleos2' />
          </section>
        </div>

        

        <section className='plazasDisponibles'>

          <h2>Plazas Disponibles</h2>

          <div className='containerPlazas'>
            <img src="https://i.ibb.co/dtLVYsC/IMAGEN-LATERAL-IZQUIERDO.png" alt="fondo1" className='fondo' />

            <div className='contenidoPerfiles'>
              <div className='perfilesPlazas'>
                {
                    dataCards1.map(data => {
                        const { img, puesto, description} = data

                        return (
                          <ProfileCards
                            key={puesto}
                            img={img}
                            puesto={puesto}
                          >
                            {description}
                          </ProfileCards>
                        )
                    })
                }
              </div>

              <div className='perfilesPlazas'>
                {   
                    dataCards2.map(data => {
                        const { img, puesto, description} = data

                        return (
                          <ProfileCards
                            key={puesto}
                            img={img}
                            puesto={puesto}
                          >
                            {description}
                          </ProfileCards>
                        )
                    })
                }
              </div>

            </div>
            

            <img src="https://i.ibb.co/vvhgLkL/IMAGEN-LATERAL-DERECHO.png" alt="fondo2"  className='fondo'/>
          </div>
          
        </section>

        <section className='footerEmpleo'>
          <Footer /> 
        </section> 

      </main>


    </div>

  );
};

export default Empleos;