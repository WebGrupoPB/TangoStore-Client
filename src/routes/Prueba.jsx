import React, { useState } from 'react';

import './styles/Prueba.css'

import logOutIcon from "../assets/icons/Logout Rounded.png"



const Prueba = () => {
  
    return (

          <div className='addSpace'>
            <div className='popUpAdd'>
              <div className='closeSpace'>
                <img src={logOutIcon} alt="logout-icon" />
              </div>
            </div>
          </div>

    );
  };

export default Prueba;