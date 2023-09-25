import React, { useState } from 'react';

import './FilterGallery.css'; // Agrega tu archivo CSS aquí

export const ImageGallery = ({index, image}) => {

  const [isHovered, setIsHovered] = useState(false);


  const handleImageHover = () => {
    /* console.log('Mouse enter', image); */
    setIsHovered(true);
  };
  
  const handleImageLeave = () => {
   /* console.log('Mouse leave'); */
    setIsHovered(false);
  };
  

  return (
                <div
                  key={index}
                  className={`gallery-item ${image.category}`}
                  onMouseEnter={() => {
                      handleImageHover()// Manejar hover para esta imagen
                  }}
                  onMouseLeave={() => {
                      handleImageLeave() // Manejar leave para esta imagen
                  }}
                >
                    
                  <div className="gallery-item-inner">
                      <img src={image.imageUrl} alt={image.category} />
                      
                      
                      {isHovered && (
                      <div className="image-overlay">

                        <div className='text-container'>
                          <h3>{image.title}</h3>
                          <p>{image.description}</p>
                        </div>
                        
                      </div>
                      )}
                  </div>
                        
                            
                        
                </div>
  );
};

export default ImageGallery;

