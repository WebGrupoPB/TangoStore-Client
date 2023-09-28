import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Decoradores from '../components/Decoradores';
import './styles/MenuPDF.css';

const MenuPDF = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <Decoradores />

      <aside className='spacePDF'>
        
          <iframe
            src="https://online.fliphtml5.com/lpmkw/labn/"
            seamless="seamless"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allowFullScreen="true"

             className='iframeBook'
          ></iframe>
        
      </aside>

      <footer className='footerError'>
        <Footer />
      </footer>
    </div>
  );
};

export default MenuPDF;
