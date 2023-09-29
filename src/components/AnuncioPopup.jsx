import React, { useState } from 'react';

import './AnuncioPopup.css'

import imageAdd from "../../public/popUpAdd.jpeg"
import logOutIcon from "../assets/icons/Logout Rounded.png"



const Popup = ({ handleClosePopup }) => {
  
    return (

          <div className='addSpace' onClick={handleClosePopup}>
            <div className='popUpAdd'>
              <img src={imageAdd} alt="imagen-anuncio" />

              <div className='closeSpace' onClick={handleClosePopup}>
                <img src={logOutIcon} alt="logout-icon" />
              </div>
            </div>
          </div>

    );
  };

export default Popup;