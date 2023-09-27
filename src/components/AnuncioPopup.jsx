import React, { useState } from 'react';

import './AnuncioPopup.css'

import logOutIcon from "../assets/icons/Logout Rounded.png"



const Popup = ({ handleClosePopup }) => {
  
    return (

          <div className='addSpace'>
            <div className='popUpAdd'>
              <div className='closeSpace' onClick={handleClosePopup}>
                <img src={logOutIcon} alt="logout-icon" />
              </div>
            </div>
          </div>

    );
  };

export default Popup;