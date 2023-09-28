import React, { useState } from 'react';
import './FilterGallery.css'; // Agrega tu archivo CSS aquí

import todosF from '../../assets/icons/menu/todos-filtro.png'
import nachos from '../../assets/icons/menu/Nachos.png'
import hotDog from '../../assets/icons/menu/hotdog.png'
import burger from '../../assets/icons/menu/Hamburger.png'
import pizza from '../../assets/icons/menu/SalamiPizza.png'
import lasagna from '../../assets/icons/menu/KawaiiNoodle.png'
import pollo from '../../assets/icons/menu/PoultryLeg.png'
import panini from '../../assets/icons/menu/Bread.png'
import sopa from '../../assets/icons/menu/SoupPlate.png'
import postre from '../../assets/icons/menu/Pie.png'
import snack from '../../assets/icons/menu/Guacamole.png'
import caliente from '../../assets/icons/menu/TeaPair.png'
import fria from '../../assets/icons/menu/CocktailShot.png'
import panaderia from '../../assets/icons/menu/panaderiaIcon.png'



const Filter = ({ activeFilter, handleFilterClick }) => {

  const filterItems = [
    { 
      id: '0', 
      name: 'Todos' , 
      img: `${todosF}`,
    },
    { 
      id: 'nachos', 
      name: 'Nachos', 
      img: `${nachos}`, 
    },
    { 
      id: 'hot dogs', 
      name: 'Hot Dogs', 
      img: `${hotDog}`, 
    },
    { 
      id: 'hamburguesas', 
      name: 'Hamburguesas', 
      img: `${burger}`, 
    },
    { 
      id: 'pizzas', 
      name: 'Pizzas', 
      img: `${pizza}`, 
    },
    { 
      id: 'lasañas', 
      name: 'Lasañas', 
      img: `${lasagna}`, 
    },
    { 
      id: 'pollos', 
      name: 'Pollo', 
      img: `${pollo}`, 
    },
    { 
      id: 'paninis', 
      name: 'Paninis', 
      img: `${panini}`, 
    },
    { 
      id: 'sopas', 
      name: 'Sopas', 
      img: `${sopa}`, 
    },
    { 
      id: 'postres', 
      name: 'Postres', 
      img: `${postre}`, 
    },
    { 
      id: 'snacks', 
      name: 'Snacks', 
      img: `${snack}`, 
    },
    { 
      id: 'panadería', 
      name: 'Panaderia', 
      img: `${panaderia}`, 
    },
    { 
      id: 'bebidas calientes', 
      name: 'Bebidas Calientes', 
      img: `${caliente}`, 
    },
    { 
      id: 'bebidas frías', 
      name: 'Bebidas Frías', 
      img: `${fria}`, 
    }, 
  ];

  return (
    <div className="gallery-filter">
      {filterItems.map((item) => (

        <div className={`filterBtn ${activeFilter === item.id ? 'active' : ''}`} onClick={() => handleFilterClick(item.id)}>
            <img src={item.img} alt="img-btn" />
            <span
              key={item.id}
              className={`filter-item ${activeFilter === item.id ? 'active' : ''}`}
              data-filter={item.id}             
            >
              {item.name}
            </span>
        </div>
        
      ))}
    </div>
  );
};

export default Filter;
