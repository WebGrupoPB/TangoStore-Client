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
        
      <div style={{ position: 'relative', height: "100vh", width: '80vw',}}>
          <iframe
            allow="clipboard-write"
            sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
            allowfullscreen="true"
            style={{ position: 'absolute', border: 'none', width: '100%', height: '100vh', left: 0, right: 0, top: 0, bottom: 0 }}
            src="https://e.issuu.com/embed.html?backgroundColor=%23fff&backgroundColorFullscreen=%23fff&d=hoja_2_hoja_1_merged&u=mercadeo-gpb"
          ></iframe>
        </div>
        
      </aside>

      <footer className='footerError'>
        <Footer />
      </footer>
    </div>
  );
};

export default MenuPDF;