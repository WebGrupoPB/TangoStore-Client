import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'
import Footer from '../components/Footer';
import Decoradores from '../components/Decoradores';
import './styles/Error.css';




const Error = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>

        <Decoradores />

        <aside className='errorSpace'>
            <img src="https://s3.amazonaws.com/tango.store/general/Error_page-img.png" alt="error-img" />
        </aside>

        <footer className='footerError'>
            <Footer />
        </footer>
    </div>

  );
};

export default Error;