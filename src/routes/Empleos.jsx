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



import fondoPlaza1 from "../../public/empleos/plazaImg1.png"
import fondoPlaza2 from "../../public/empleos/plazaImg2.png"


const dataHero1 = [
  {
    id: 0,
    img: 'https://i.ibb.co/4VKLHbd/5.png',
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
      img: 'https://i.ibb.co/WGPQmKS/empleo-Perfil.png',
      puesto: 'DEPENDIENTE DE TIENDA ',
      description: 'Encargados de caja, preparación de alimentos, rotación de productos en cámaras frías y góndolas, limpieza de tienda.',
      urlJob: 'https://docs.google.com/forms/d/e/1FAIpQLSfI_2Hhj53XtbI9LwLUMTH1zHOqk9x2_kt9_RgNEFFr8QhTQg/viewform',
  },
];

const dataCards2 = [
  {
      img: 'https://i.ibb.co/6mBDB02/empleo-Logo.png',
      puesto: 'PRÓXIMAMENTE',
      description: 'En un futuro se habilitaran nuevas plazas',
      urlJob: 'https://i.ibb.co/KL0DS1f/Logo-Tango-2.png',
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
            <img src={fondoPlaza1} alt="fondo1" className='fondo' />

            <div className='contenidoPerfiles'>
              <div className='perfilesPlazas'>
                {
                    dataCards1.map(data => {
                        const { img, puesto, description, urlJob} = data

                        return (
                          <ProfileCards
                            key={puesto}
                            img={img}
                            puesto={puesto}
                            urlJob={urlJob}
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
            

            <img src={fondoPlaza2} alt="fondo2"  className='fondo'/>
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