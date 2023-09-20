import React, { useState } from 'react';


import './FilterGallery.css'; // Agrega tu archivo CSS aquí
import ImageGallery from './ImageGallery';

export const GalleryCategory = ({ title, images, onMouseEnter, onMouseLeave, hoveredImage }) => {
  // Usamos un objeto para almacenar el estado isHovered para cada imagen
  const [hoveredImages, setHoveredImages] = useState({});

  const handleMouseEnter = (index) => {
    // Establecer isHovered como verdadero para la imagen en el índice dado
    setHoveredImages({ ...hoveredImages, [index]: true });
  };

  const handleMouseLeave = (index) => {
    // Establecer isHovered como falso para la imagen en el índice dado
    setHoveredImages({ ...hoveredImages, [index]: false });
  };

  return (
    <div className="row">
      {title !== 'all' && (
        <div>
          <h2 className='categoryTitle'>{title}</h2>
          <div className="row">
            {images.map((image, index) => (
   
              <ImageGallery  index={index} image={image} /> 
              
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCategory;

