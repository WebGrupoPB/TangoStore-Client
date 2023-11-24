import React, { useState } from 'react';
import Snow from './snow';

import './AnuncioPopup.css'

import imageAdd from "../../public/home/popUpAdd.jpeg"
import logOutIcon from "../assets/icons/Logout Rounded.png"
import logOutBtnIcon from "../assets/icons/logout-btn.svg"


const Popup = ({ handleClosePopup }) => {
  
    return (

          <div className='addSpace' onClick={handleClosePopup}>
            {/* <Snow /> */}

            <div className='popUpAdd'>
              <img src="https://s3.amazonaws.com/tango.store/general/temporadaNavide%C3%B1a/Pop+tango+navidad.png" alt="imagen-anuncio" />

              <div className='closeSpace' onClick={handleClosePopup}>
                <img src={logOutBtnIcon} alt="logout-icon" />
              </div>
            </div>
          </div>

    );
  };

export default Popup;