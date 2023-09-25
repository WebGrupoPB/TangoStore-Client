import React, { useState, useEffect } from 'react';




import instagramPng from '../assets/icons/instagram.png'
import facebookPng from '../assets/icons/facebook.png'
import trianguloPng from '../assets/icons/tango-triangulo.png'


const ChatBubble = () => {
  return (
    <div className='bubbleChat'>
      <div className='squareBubble'>
          <h4>¡Hola!</h4>
          <p>en que puedo ayudarte</p>
      </div>

      <div className='trianguleBubble'></div>
    </div>
  )
}



const Decoradores = () => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      setShowChat((prevShowChat) => !prevShowChat);
    }, 10000); // Cambiar el estado cada 10 segundos

    return () => {
      clearInterval(chatInterval);
    };
  }, []);


  const [isHovered, setIsHovered] = useState(false);

  // Función para manejar el hover
  const handleHover = () => {
    setIsHovered(true);
  };

  // Función para manejar el fin del hover
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div>      
        <div className='text-square'>
          <span><b>Tiendas de conveniencia</b></span>
        </div>
        <div className='line-decoration'></div>

        <div className='social-media'>
          <a href="https://instagram.com/tangostore.la?igshid=MzRlODBiNWFlZA==" target="_blank"><div className='circle-icon'><img src={instagramPng} alt="instagram"/></div></a>
          <a href="https://www.facebook.com/Tangostore.la?mibextid=LQQJ4d" target="_blank"><div className='circle-icon'><img src={facebookPng} alt="facebook"/></div></a>
          <a href="https://api.whatsapp.com/send?phone=50222473334&text=Hola%2C%20quisiera%20reportar%20las%20*condiciones%20de%20la%20pista%20de%20%20Puma%20Estaci%C3%B3n%20Atanasio*" target="_blank">
            <div
              className={`circle-icon${isHovered ? ' hovered' : ''}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <img src={trianguloPng} alt="tango-triangulo"/>
          </div> 
          </a>
          {isHovered && <ChatBubble />}
        </div>
    </div>
  );
};

export default Decoradores;