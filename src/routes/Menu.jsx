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
      imageUrl: 'https://i.ibb.co/f4HW97X/nachos-Supremos.png', 
    },
    { 
      category: 'nachos',
      title: 'Quesonachos',  
      description: 'Salsa de carne, queso cheddar.',
      imageUrl: 'https://i.ibb.co/Qf3pQxG/quesonachos.png', 
    },  
    { 
      category: 'hotdog',
      title: 'Chilli Dog',  
      description: 'Salchicha y pan a tu elección, salsa de carne, queso cheddar y chile pimiento.',
      imageUrl: 'https://i.ibb.co/1n5mngS/chillidog.png' 
    },
    { 
      category: 'hotdog',
      title: 'Chapín Dog',  
      description: 'Salchicha y pan a tu elección, guacamol, jamón de pavo, cebolla morada y queso cheddar',
      imageUrl: 'https://i.ibb.co/cvYr3Fn/chapindog.png' 
    },  
    { 
      category: 'hotdog',
      title: 'tan Dog',  
      description: 'Salchicha y pan a tu elección, aderezo de hierbas, cebolla caramelizada y champiñones.',
      imageUrl: 'https://i.ibb.co/rmBNS7M/tandog.png' 
    },
    { 
      category: 'hamburguesa',
      title: 'Quesoburguesa', 
      description: 'Torta angus 4 oz. pan brioche, queso cheddar, salami, lechuga romana, tomate manzano, cebolla  morada, aderezo de hierbas.',
      imageUrl: 'https://i.ibb.co/rGGn8bn/quesoburguesa.png' 
    },
    { 
      category: 'hamburguesa',
      title: 'BBQ Burger', 
      description: 'Torta angus 4 oz. pan brioche, queso cheddar, cebolla caramelizada, champiñones, guacamol, lechuga romana, chile pimiento, aderezo de chimichurri, salsa barbacoa',
      imageUrl: 'https://i.ibb.co/3RcqdG1/BBQ-hamburguesa.png' 
    },
    { 
      category: 'pizza',
      title: 'Queso', 
      description: 'Deliciosa combinación de abundante queso sobre pan pizza.',
      imageUrl: 'https://i.ibb.co/FhZDhxG/pizzaqueso.png' 
    },
    { 
      category: 'pizza',
      title: 'Pepperoni', 
      description: 'Deliciosa combinación de queso y pepperoni sobre pan pizza.',
      imageUrl: 'https://i.ibb.co/ZTv1pjm/pizza-pepperoni.png' 
    },
    { 
      category: 'pizza',
      title: 'Italiana', 
      description: 'Jamón virginia, jamón de pavo, salami, chile pimiento, cebolla y champiñones.',
      imageUrl: 'https://i.ibb.co/6nv59mF/italiana.png' 
    },
    { 
      category: 'lasaña',
      title: 'Boloñesa', 
      description: 'Salsa ragú, carne de res y mezcla de quesos. Incluye pan.',
      imageUrl: 'https://i.ibb.co/7YHb5yv/bolo-esa.png' 
    },
    { 
      category: 'pollo',
      title: 'Pechuguitas', 
      description: '1/2 lb de pechuguitas empanizadas con aderezo a tu elección.',
      imageUrl: 'https://i.ibb.co/JydsLtj/pechuguitas.png' 
    },
    { 
      category: 'pollo',
      title: 'Alitas', 
      description: '1/2 lb de alitas barbacoa con aderezo a tu elección',
      imageUrl: 'https://i.ibb.co/m44gbL8/alitas.png'   
    },
    { 
      category: 'panini',
      title: 'Italiano', 
      description: 'Trenza francesa, jamón virginia, jamón de pavo, salami, queso cheddar, queso suizo, lechuga y champiñones.',
      imageUrl: 'https://i.ibb.co/wdfZ6c5/panini-italiano.png' 
    },
    { 
      category: 'panini',
      title: 'Pechugo', 
      description: 'Trenza francesa, pechuga a la parrilla, guacamol, queso cheddar, champiñones y aderezo chipotle.',
      imageUrl: 'https://i.ibb.co/v4zq2hJ/pechugo.png' 
    },
    { 
      category: 'panini',
      title: 'Philly Steak', 
      description: 'Trenza francesa, lomito de res, queso suizo, chile pimiento, cebolla caramelizada y aderezo de hierbas',
      imageUrl: 'https://i.ibb.co/v4zq2hJ/pechugo.png' 
    },
    { 
      category: 'sopa',
      title: 'Sopas', 
      description: 'Preparadas con tomate, chile pimiento, cebolla, champiñones y jalapeño.',
      imageUrl: 'https://i.ibb.co/XLJSMTy/sopas.png' 
    },
    { 
      category: 'postre',
      title: 'Tres Leches',  
      description: 'Delicioso Pastel de tres leches',
      imageUrl: 'https://i.ibb.co/5F6CQ3r/tres-Leches.png' 
    },
    { 
      category: 'postre',
      title: 'Cheesecake', 
      description: 'Delicioso pastel de queso',
      imageUrl: 'https://i.ibb.co/rwT7MPj/cheesecake.png' 
    },
    { 
      category: 'snack', 
      title: 'Papas Fritas',
      description: 'Papas crunch corte recto. Con elección de aderezos de Barbacoa, Hierbas, Chipotle, Queso',
      imageUrl: 'https://i.ibb.co/g7fyWzN/Papas-Fritas.png' 
    },
    { 
      category: 'snack', 
      title: 'Muffin Queso',
      description: 'Pan muffin, huevo, queso cheddar y aderezo de hierbas.',
      imageUrl: 'https://i.ibb.co/XL3JkBS/muffin-huevo.png' 
    },
    { 
      category: 'snack', 
      title: 'Muffin Salchicha',
      description: 'Pan muffin, huevo, salchicha, queso cheddar y aderezo de hierbas',
      imageUrl: 'https://i.ibb.co/nBcxJhD/muffin-salchicha.png' 
    },
    { 
      category: 'snack', 
      title: 'Muffin Jamón',
      description: 'Pan muffin, huevo, jamón de pavo, queso cheddar y aderezo de hierbas',
      imageUrl: 'https://i.ibb.co/zGYx6gh/muffin-jamon.png' 
    },
    { 
      category: 'snack', 
      title: 'Sandwich Virginia',
      description: 'Trenza francesa, jamón virginia, huevo, queso suizo, tomate, chile pimiento, cebolla, champiñones y aderezo de hierbas.',
      imageUrl: 'https://i.ibb.co/QkXL2QK/Sandwich-Virginia.png' 
    },
    { 
      category: 'snack', 
      title: 'Waffle',
      description: 'Con miel de maple',
      imageUrl: 'https://i.ibb.co/yBtHbZ8/waffle.png' 
    },
    { 
      category: 'caliente',
      title: 'Cafe', 
      description: 'Variedad de cafés: Café Tango, Café Chapín, Café con leche, Espresso, Espresso cortado',
      imageUrl: 'https://i.ibb.co/ZKYJ216/cafe.png' 
    },
    { 
      category: 'caliente',
      title: 'Capuccinos', 
      description: 'Variedad de capuccinos: Capuccino, Capuccino Vainilla, Capuccino Caramelo, Mocaccino, Chocolate, Té caliente',
      imageUrl: 'https://i.ibb.co/w00CkLQ/capuchinos.png' 
    },
    { 
      category: 'fria', 
      title: 'Granitas',
      description: 'Deliciosas Granitas de Fresa, Mora Azul, Limón y Mango',
      imageUrl: 'https://i.ibb.co/XLNYNPT/Granitas.png' 
    },
    { 
      category: 'fria', 
      title: 'Frappés',
      description: 'Deliciosos Frapes de Oreo, Caramelo y Mocca',
      imageUrl: 'https://i.ibb.co/NTn13mS/frappes.png' 
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