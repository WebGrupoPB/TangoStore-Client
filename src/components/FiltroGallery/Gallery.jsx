import React, { useState } from 'react';


import './FilterGallery.css'; // Agrega tu archivo CSS aquí
import ImageGallery from './ImageGallery';


const HotDogDescripton = () => {
  return (
    <div className='categoryOptions'>
      <h4>Opciones a elegir</h4>

      <p>
        <table>
          <tr>
            <td>Pan</td>
            <td>Salchicha</td>
          </tr>

          <tr>
            <td>
              <ul>
                <li>Especies italianas</li>
                <li>Parmesano</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>
                  Thuringer: Salchicha tipo alemana a base de
                              semilla de mostaza y carne de cerdo.
                </li>
                <li>
                  Bock: Salchicha tipo alemana ahumada con especies.
                </li>
              </ul>
            </td>
          </tr>
          
        </table>
      </p>
    </div>
  )
  
}



export const GalleryCategory = ({ title, images }) => {
  

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

          {title === 'hot dogs' && <HotDogDescripton />}
        </div>

      )}
    </div>
  );
};

export default GalleryCategory;

