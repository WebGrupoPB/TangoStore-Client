import React from 'react';



import instagramPng from '../assets/icons/instagram.png'
import facebookPng from '../assets/icons/facebook.png'
import trianguloPng from '../assets/icons/tango-triangulo.png'




const Decoradores = () => {
  return (
    <div>      
        <div className='text-square'>
          <span><b>Tiendas de conveniencia</b></span>
        </div>
        <div className='line-decoration'></div>

        <div className='social-media'>
          <a href="https://instagram.com/tangostore.la?igshid=MzRlODBiNWFlZA==" target="_blank"><div className='circle-icon'><img src={instagramPng} alt="instagram"/></div></a>
          <a href="https://www.facebook.com/Tangostore.la?mibextid=LQQJ4d" target="_blank"><div className='circle-icon'><img src={facebookPng} alt="facebook"/></div></a>
          <a href="#tangochat"><div className='circle-icon'><img src={trianguloPng} alt="tango-triangulo"/></div></a>
        </div>
    </div>
  );
};

export default Decoradores;