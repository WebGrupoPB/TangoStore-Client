import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Filter from '../components/FiltroGallery/Filter';
import GalleryCategory from '../components/FiltroGallery/Gallery';


import './styles/Menu.css';


import filtroImg from '../assets/icons/menu/filtro_img1.png'



const Menu = () => {

  const [activeFilter, setActiveFilter] = useState('0');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const images = [
    { 
      category: 'nachos',
      title: 'Nachos Supremos',
      description: 'Salsa de carne, queso cheddar, guacamol, tomate, crema, jalapeño.', 
      imageUrl: 'https://i.ibb.co/569LHKD/Nachos-Supremos.jpg', 
    },
    { 
      category: 'nachos',
      title: 'Quesonachos',  
      description: 'Salsa de carne, queso cheddar.',
      imageUrl: 'https://i.ibb.co/xjwbJXT/Quesonachos-8.jpg', 
    },  
    { 
      category: 'hotdog',
      title: 'Chilli Dog',  
      description: 'Salchicha y pan a tu elección, salsa de carne, queso cheddar y chile pimiento.',
      imageUrl: 'https://i.ibb.co/4gXZr3C/PRODUCTO-001.jpg' 
    },
    { 
      category: 'hotdog',
      title: 'Chapín Dog',  
      description: 'Salchicha y pan a tu elección, guacamol, jamón de pavo, cebolla morada y queso cheddar',
      imageUrl: 'https://i.ibb.co/j6VBsQB/PRODUCTO-001-7.jpg' 
    },  
    { 
      category: 'hotdog',
      title: 'tan Dog',  
      description: 'Salchicha y pan a tu elección, aderezo de hierbas, cebolla caramelizada y champiñones.',
      imageUrl: 'https://i.ibb.co/GPCZW78/Hot-Dog-Chap-n-05.jpg' 
    },
    { 
      category: 'hamburguesa',
      title: 'Quesoburguesa', 
      description: 'Torta angus 4 oz. pan brioche, queso cheddar, salami, lechuga romana, tomate manzano, cebolla  morada, aderezo de hierbas.',
      imageUrl: 'https://i.ibb.co/HDjntwz/Quesoburguesa-5.jpg' 
    },
    { 
      category: 'hamburguesa',
      title: 'BBQ Burger', 
      description: 'Torta angus 4 oz. pan brioche, queso cheddar, cebolla caramelizada, champiñones, guacamol, lechuga romana, chile pimiento, aderezo de chimichurri, salsa barbacoa',
      imageUrl: 'https://i.ibb.co/0rd3qtj/Grilled-Chicken-Burguer-02.jpg' 
    },
    { 
      category: 'pizza',
      title: 'Queso', 
      description: 'Deliciosa combinación de abundante queso sobre pan pizza.',
      imageUrl: 'https://i.ibb.co/vVWc8zq/Pizza-Lomito-04.jpg' 
    },
    { 
      category: 'pizza',
      title: 'Pepperoni', 
      description: 'Deliciosa combinación de queso y pepperoni sobre pan pizza.',
      imageUrl: 'https://i.ibb.co/8KkdcJj/Pizza-pepperoni-4.jpg' 
    },
    { 
      category: 'pizza',
      title: 'Italiana', 
      description: 'Jamón virginia, jamón de pavo, salami, chile pimiento, cebolla y champiñones.',
      imageUrl: 'https://i.ibb.co/NrxhfBN/Pizza-italiana-9.jpg' 
    },
    { 
      category: 'lasaña',
      title: 'Boloñesa', 
      description: 'Salsa ragú, carne de res y mezcla de quesos. Incluye pan.',
      imageUrl: 'https://i.ibb.co/JkFTB6h/PRODUCTO-006-1.jpg' 
    },
    { 
      category: 'pollo',
      title: 'Pechuguitas', 
      description: '1/2 lb de pechuguitas empanizadas con aderezo a tu elección.',
      imageUrl: 'https://i.ibb.co/bJPzsMC/pechuguitas-6.jpg' 
    },
    { 
      category: 'pollo',
      title: 'Alitas', 
      description: '1/2 lb de alitas barbacoa con aderezo a tu elección',
      imageUrl: 'https://i.ibb.co/2tx6hJk/Sandwich-de-pollo-2-baja.jpg' 
    },
    { 
      category: 'panini',
      title: 'Italiano', 
      description: 'Trenza francesa, jamón virginia, jamón de pavo, salami, queso cheddar, queso suizo, lechuga y champiñones.',
      imageUrl: 'https://i.ibb.co/mhM8Hs4/Panini-italiano-10.jpg' 
    },
    { 
      category: 'panini',
      title: 'Pechugo', 
      description: 'Trenza francesa, pechuga a la parrilla, guacamol, queso cheddar, champiñones y aderezo chipotle.',
      imageUrl: 'https://i.ibb.co/gVjsCGj/panini-pulled-pork-6.jpg' 
    },
    { 
      category: 'panini',
      title: 'Philly Steak', 
      description: 'Trenza francesa, lomito de res, queso suizo, chile pimiento, cebolla caramelizada y aderezo de hierbas',
      imageUrl: 'https://i.ibb.co/nMh4pPm/PRODUCTO-009.jpg' 
    },
    { 
      category: 'sopa',
      title: 'Sopas', 
      description: 'Preparadas con tomate, chile pimiento, cebolla, champiñones y jalapeño.',
      imageUrl: 'https://i.ibb.co/0cQNtpB/IMG-2247.jpg' 
    },
    { 
      category: 'postre',
      title: 'Tres Leches',  
      description: 'Delicioso Pastel de tres leches',
      imageUrl: 'https://i.ibb.co/587xSs4/Pastel-3-leches-HD.jpg' 
    },
    { 
      category: 'postre',
      title: 'Cheesecake', 
      description: 'Delicioso pastel de queso',
      imageUrl: 'https://i.ibb.co/587xSs4/Pastel-3-leches-HD.jpg' 
    },
    { 
      category: 'snack', 
      title: 'snack',
      description: 'ndsaunakjdnkaMFKLASMLFASMEJLKMIEOF',
      imageUrl: 'https://i.ibb.co/0cQNtpB/IMG-2247.jpg' 
    },
    { 
      category: 'caliente',
      title: 'cafe', 
      description: 'Variedad de cafés: Café Tango, Café Chapín, Café con leche, Capuccino, Capuccino Vainilla, Capuccino Caramelo, Mocaccino, Chocolate, Té caliente, Espresso, Espresso cortado',
      imageUrl: 'https://i.ibb.co/wM140vF/Muffin-de-queso-5.jpg' 
    },
    { 
      category: 'fria', 
      title: 'Granitas',
      description: 'Deliciosas Granitas de Fresa, Mora Azul, Limón y Mango',
      imageUrl: 'https://i.ibb.co/3C9ktfw/granita-mora-azul-02.jpg' 
    },
    { 
      category: 'fria', 
      title: 'Frapes',
      description: 'Deliciosos Frapes de Oreo, Caramelo y Mocca',
      imageUrl: 'https://i.ibb.co/3C9ktfw/granita-mora-azul-02.jpg' 
    },
  ];


  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);


  const handleImageHover = (image) => {
    /* console.log('Mouse enter', image); */
    setIsHovered(true);
    setHoveredImage(image);
  };
  
  const handleImageLeave = () => {
   /* console.log('Mouse leave'); */
    setIsHovered(false);
    setHoveredImage(null);
  };
  

  // Estructura de datos con imágenes por categoría
  const categorizedImages = {
    all: images,
    nachos: images.filter(image => image.category === 'nachos'),
    'hot dogs': images.filter(image => image.category === 'hotdog'),
    hamburguesas: images.filter(image => image.category === 'hamburguesa'),
    pizzas: images.filter(image => image.category === 'pizza'),
    lasañas: images.filter(image => image.category === 'lasaña'),
    pollos: images.filter(image => image.category === 'pollo'),
    paninis: images.filter(image => image.category === 'panini'),
    sopas: images.filter(image => image.category === 'sopa'),
    postres: images.filter(image => image.category === 'postre'),
    snacks: images.filter(image => image.category === 'snack'),
    'bebidas calientes': images.filter(image => image.category === 'caliente'),
    'bebidas frias': images.filter(image => image.category === 'fria'),
  };


  return (
    <div>
        <header>
            <Navbar />
        </header>

        <div className='filtro-container'>
          <aside className='filtroSpace'>
              <h1>Menú</h1>  
              <span><h5>Filtro</h5> <img src={filtroImg} alt="filtro-img" /></span>
              <div className='filtroMenu'>
                <Filter activeFilter={activeFilter} handleFilterClick={handleFilterClick} />
              </div> 
          </aside>
        </div>

        <section className='menuGallery'>
          <div className='galleryContainer'>
            {activeFilter === '0' ? (
              Object.keys(categorizedImages).map(category => (
                <GalleryCategory
                key={category}
                title={category}
                images={categorizedImages[category]}
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
                hoveredImage={hoveredImage}
                
              />
              ))
            ) : (
              <GalleryCategory
              title={activeFilter}
              images={categorizedImages[activeFilter]}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
              hoveredImage={hoveredImage}
              
            />
            )}
          </div>
        </section>
        

        <footer className='footerMenu'>
            <Footer />
        </footer>
    </div>
  );
};

export default Menu;