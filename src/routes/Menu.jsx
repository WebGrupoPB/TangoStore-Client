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
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/nachosSupremos.png', 
    },
    { 
      category: 'nachos',
      title: 'Quesonachos',  
      description: 'Salsa de carne, queso cheddar.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/quesonachos.png', 
    },  
    { 
      category: 'hotdog',
      title: 'Chilli Dog',  
      description: 'Salchicha y pan a tu elección, salsa de carne, queso cheddar y chile pimiento.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/chillidog.png' 
    },
    { 
      category: 'hotdog',
      title: 'Chapín Dog',  
      description: 'Salchicha y pan a tu elección, guacamol, jamón de pavo, cebolla morada y queso cheddar',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/chapindog.png' 
    },  
    { 
      category: 'hotdog',
      title: 'tan Dog',  
      description: 'Salchicha y pan a tu elección, aderezo de hierbas, cebolla caramelizada y champiñones.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/tandog.png' 
    },
    { 
      category: 'hamburguesa',
      title: 'Quesoburguesa', 
      description: 'Torta angus 4 oz. pan brioche, queso cheddar, salami, lechuga romana, tomate manzano, cebolla  morada, aderezo de hierbas.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/quesoHamburguesa.png' 
    },
    { 
      category: 'hamburguesa',
      title: 'BBQ Burger', 
      description: 'Torta angus 4 oz. pan brioche, queso cheddar, cebolla caramelizada, champiñones, guacamol, lechuga romana, chile pimiento, aderezo de chimichurri, salsa barbacoa',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/BBQ+redimensiaonada.png' 
    },
    { 
      category: 'pizza',
      title: 'Queso', 
      description: 'Deliciosa combinación de abundante queso sobre pan pizza.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/pizzaqueso.png' 
    },
    { 
      category: 'pizza',
      title: 'Pepperoni', 
      description: 'Deliciosa combinación de queso y pepperoni sobre pan pizza.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/pizza-pepperoni.png' 
    },
    { 
      category: 'pizza',
      title: 'Italiana', 
      description: 'Jamón virginia, jamón de pavo, salami, chile pimiento, cebolla y champiñones.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/italiana.png' 
    },
    { 
      category: 'lasaña',
      title: 'Boloñesa', 
      description: 'Salsa ragú, carne de res y mezcla de quesos. Incluye pan.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/bolo%C3%B1esa.png' 
    },
    { 
      category: 'pollo',
      title: 'Pechuguitas', 
      description: '1/2 lb de pechuguitas empanizadas con aderezo a tu elección.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/pechuguitas.png' 
    },
    { 
      category: 'pollo',
      title: 'Alitas', 
      description: '1/2 lb de alitas barbacoa con aderezo a tu elección',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/alitas.png'   
    },
    { 
      category: 'panini',
      title: 'Italiano', 
      description: 'Trenza francesa, jamón virginia, jamón de pavo, salami, queso cheddar, queso suizo, lechuga y champiñones.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/panini+italiano.png' 
    },
    { 
      category: 'panini',
      title: 'Pechugo', 
      description: 'Trenza francesa, pechuga a la parrilla, guacamol, queso cheddar, champiñones y aderezo chipotle.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/pechugo.png' 
    },
    { 
      category: 'panini',
      title: 'Philly Steak', 
      description: 'Trenza francesa, lomito de res, queso suizo, chile pimiento, cebolla caramelizada y aderezo de hierbas',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/panini-phillySteak.png' 
    },
    { 
      category: 'sopa',
      title: 'Sopas', 
      description: 'Preparadas con tomate, chile pimiento, cebolla, champiñones y jalapeño.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/sopas.png' 
    },
    { 
      category: 'postre',
      title: 'Tres Leches',  
      description: 'Delicioso Pastel de tres leches',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/tresLeches.png' 
    },
    { 
      category: 'postre',
      title: 'Cheesecake', 
      description: 'Delicioso pastel de queso',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/cheesecake.png' 
    },
    { 
      category: 'snack', 
      title: 'Papas Fritas',
      description: 'Papas crunch corte recto. Con elección de aderezos de Barbacoa, Hierbas, Chipotle, Queso',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/PapasFritas.png' 
    },
    { 
      category: 'snack', 
      title: 'Muffin Queso',
      description: 'Pan muffin, huevo, queso cheddar y aderezo de hierbas.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/muffin-huevo.png' 
    },
    { 
      category: 'snack', 
      title: 'Muffin Salchicha',
      description: 'Pan muffin, huevo, salchicha, queso cheddar y aderezo de hierbas',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/muffin-salchicha.png' 
    },
    { 
      category: 'snack', 
      title: 'Muffin Jamón',
      description: 'Pan muffin, huevo, jamón de pavo, queso cheddar y aderezo de hierbas',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/muffin-jamon.png' 
    },
    { 
      category: 'snack', 
      title: 'Sandwich Virginia',
      description: 'Trenza francesa, jamón virginia, huevo, queso suizo, tomate, chile pimiento, cebolla, champiñones y aderezo de hierbas.',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/Sandwich-Virginia.png' 
    },
    { 
      category: 'snack', 
      title: 'Waffle',
      description: 'Con miel de maple',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/waffle.png' 
    },
    { 
      category: 'caliente',
      title: 'Cafe', 
      description: 'Variedad de cafés: Café Tango, Café Chapín, Café con leche, Espresso, Espresso cortado',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/cafe.png' 
    },
    { 
      category: 'caliente',
      title: 'Capuccinos', 
      description: 'Variedad de capuccinos: Capuccino, Capuccino Vainilla, Capuccino Caramelo, Mocaccino, Chocolate, Té caliente',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/capuchinos.png' 
    },
    { 
      category: 'fria', 
      title: 'Granitas',
      description: 'Deliciosas Granitas de Fresa, Mora Azul, Limón y Mango',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/Granitas.png' 
    },
    { 
      category: 'fria', 
      title: 'Frappés',
      description: 'Deliciosos Frapes de Oreo, Caramelo y Mocca',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/frappes.png' 
    },
    { 
      category: 'panadería', 
      title: 'Volován',
      description: 'Deliciosos volovanes de pollo',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/volovan.png' 
    },
    { 
      category: 'panadería', 
      title: 'Croissant',
      description: 'Exquisitos croissants simples, jamón y queso, queso crema, nutela o almendra',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/croissant.png' 
    },
    { 
      category: 'panadería', 
      title: 'Polvorosas',
      description: 'Deliciosas galletas polvorosas',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/polvorosas.png' 
    },
    { 
      category: 'panadería', 
      title: 'Galletas',
      description: 'Deliciosas galletas de mantequilla y canela',
      imageUrl: 'https://s3.amazonaws.com/tango.store/menu/galletas.png' 
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
    pollo: images.filter(image => image.category === 'pollo'),
    paninis: images.filter(image => image.category === 'panini'),
    sopas: images.filter(image => image.category === 'sopa'),
    postres: images.filter(image => image.category === 'postre'),
    snacks: images.filter(image => image.category === 'snack'),
    'bebidas calientes': images.filter(image => image.category === 'caliente'),
    'bebidas frías': images.filter(image => image.category === 'fria'),
    'panadería': images.filter(image => image.category === 'panadería'),
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