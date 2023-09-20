import React, { useState, useEffect } from 'react';
import './Slider.scss';


import burguerPng from '../assets/icons/hamburguesa.png'
import donaPng from '../assets/icons/dona.png'
import tazaPng from '../assets/icons/taza.png'
import refrescoPng from '../assets/icons/refresco.png'

import facebookYellow from '../assets/icons/Facebook_Yellow.png'
import instagramYellow from '../assets/icons/Instagram_Yellow.png'
import googleMapYellow from '../assets/icons/GoogleMap_Yellow.png'


// este componente define el contenido del panel, Slider 1 (Hero del Home Page)
const InfoHeroHome = () => ( 
      <div>

        <h2 className="panel-header"><strong>Tiendas Tango</strong></h2>

        <p className="panel-info">En nuestras tiendas, puedes encontrar una amplia variedad de productos para satisfacer tus necesidades diarias.</p>

        <p className="panel-info">
          Desde:

          <table className='panel-table'>
            <tr>
              <td><img src={burguerPng} alt="hamburguesa" className="img-table" /></td>
              <td><b>Alimentos</b></td>
            </tr>

            <tr>
              <td><img src={donaPng} alt="dona" className="img-table" /></td>
              <td><b>Snacks</b></td>
            </tr>

            <tr>
              <td><img src={tazaPng} alt="tazaCafe" className="img-table" /></td>
              <td><b>Bebidas Calientes</b></td>
            </tr>

            <tr>
              <td><img src={refrescoPng} alt="refresco" className="img-table" /></td>
              <td><b>Bebidas Frías</b></td>
            </tr>
            
          </table>
        </p>

        <p className="panel-info">Tenemos todo lo que necesitas en un solo lugar.</p>

      </div>
);

// este componente define el contenido del panel, Slider 2 (Hero del Empleos Page)
const InfoHeroEmpleos = () => ( 
  <div>

    <h2 className="panel-header"><strong>Tiendas Tango</strong></h2>

    <p className="panel-info">Únete a Nuestro Equipo de Atención al Cliente en la Mejor tienda de conveniencia de el país. </p>

    <div className='redesEmpleo'> 
      <h5>redes sociales</h5>

      <div>
        <a href="https://www.facebook.com/Tangostore.la?mibextid=LQQJ4d" target="_blank"><img src={facebookYellow} alt="a" /></a>
        <a href="https://instagram.com/tangostore.la?igshid=MzRlODBiNWFlZA==" target="_blank"><img src={instagramYellow} alt="b" /></a>
        <a href="https://www.google.com/maps/search/Tango+Store/@14.6294877,-91.6623839,9z/data=!3m1!4b1?entry=ttu" target="_blank"><img src={googleMapYellow} alt="c" /></a>
      </div>

    </div>

  </div>
);


// este componente define el contenido del panel, Slider 3 (Hero del Empleos Page 2)
const InfoHeroEmpleos2 = () => ( 
  <div>

    <h2 className="panel-header"><strong>¿Por qué trabajar en Tango Store?</strong></h2>

    <p className="panel-info">
      En nuestras tiendas de conveniencia, no solo vendemos productos, creamos experiencias.
      Buscamos individuos apasionados por brindar un servicio excepcional al cliente y
      que deseen formar parte de una comunidad en la que la satisfacción del cliente es
      nuestra máxima prioridad.
    </p>

  </div>
);


  
const InfoPromociones = ( { dataSlider } ) => (

  <div className="promotion-container">
    <h1 className="promotionText">{dataSlider.text}</h1>
  </div>
  
);  


const Panel = ({ panelInfo, dataSlider, activeID }) => {

  // Define un estado para los estilos del panel
  const [panelStyle, setPanelStyle] = useState({
    // Define los estilos iniciales del panel aquí
    backgroundColor: '#fff', // Cambia esto según tus necesidades
    right: '0',    
  });

  // Función para cambiar los estilos del panel en función del parámetro
  const updatePanelStyle = () => {
    let styles = {};
    if (panelInfo === 'promotions') {

      styles = {   
        right: '5vw',
        backgroundColor: 'transparent',
        opacity: '1',
        width: '50vw',
      };

      if (window.innerWidth <= 600) {
        styles = {  
          position: 'absolute', 
          right: '-40vw',
          backgroundColor: 'transparent',
          opacity: '1',
          width: '50vw',
        };
      } 


    } else if (panelInfo === 'heroEmpleos2') {

      styles = {
        left: '0',
      };

      if (window.innerWidth <= 600) {
        styles = {
          position: 'relative',
          left: '0',
          marginTop: '5vh',
        };
      } 
      
      

     
    }

    
    setPanelStyle(styles);
    
  };

  // Llama a la función para actualizar los estilos cuando cambie panelInfo
  useEffect(() => {
    updatePanelStyle();
    window.addEventListener('resize', updatePanelStyle);

    return () => {
      window.removeEventListener('resize', updatePanelStyle);
    };
  }, [panelInfo]);

  return (
    <aside className="panel" style={panelStyle}>

      {panelInfo === 'heroHome' && <InfoHeroHome />}

      {panelInfo === 'promotions' && (
        <InfoPromociones dataSlider={dataSlider[activeID]} />
      )}

      {panelInfo === 'heroEmpleos' && <InfoHeroEmpleos /> }  

      {panelInfo === 'heroEmpleos2' && <InfoHeroEmpleos2 /> }  

    </aside>
  );

};




const Slider = ({ dataSlider, panelInfo }) => {


  // defineel background img inicial del slider
  const [activeID, setActiveID] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState({
    backgroundImage: `url('${dataSlider[0].img}')`,
  });


  // cambia el background del slider por el id
  const changeActive = (id) => {
    setActiveID(id);
    setWrapperStyle({ backgroundImage: `url('${dataSlider[id].img}')` });
  };

  // modifica el estilo del panel.aside en funcion del panelInfo
  


  // script que define el cambio de id del slider por periodos de tiempo 
  useEffect(() => {
    const interval = setInterval(() => {
      const nextID = (activeID + 1) % dataSlider.length;
      changeActive(nextID);
    }, 7000); // Cambiar cada 10 segundos

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [activeID]); // Se ejecuta cada vez que activeID cambia


  return (
    <section className="wrapper" style={wrapperStyle}>
      {activeID !== undefined && (
      <Panel dataSlider={dataSlider} panelInfo={panelInfo} activeID={activeID} />
    )}

      {panelInfo !== 'promotions' & panelInfo !== 'heroEmpleos2' && <div className='lineDecoration'></div>}
      
      {panelInfo === 'heroEmpleos2' && 
        <img src="https://i.ibb.co/KL0DS1f/Logo-Tango-2.png"
        alt="Tango logo" className='tangoLogo-empleos'/> }

    </section>
  );
};

export default Slider;

