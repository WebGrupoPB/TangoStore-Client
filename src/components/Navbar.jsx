import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import paidSvg from '../assets/icons/Paid.svg';
import './Navbar.css';

import tangoNavbar from "../../public/Logo Tango navbar.png"




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Agregar un efecto para desactivar el menú en pantallas más grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Agregar un event listener para cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    // Agregar un event listener para el documento principal
    document.addEventListener('mousedown', handleOutsideClick);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#" onClick={scrollToTop}>
          <img src={tangoNavbar} alt="logo-tango" />
        </a>
      </div>

      <div className='showMenu'>
        <button className="hamburger-button" onClick={() => {
          if (menuOpen) {
            closeMenu();
          } else {
            toggleMenu();
          }
        }}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>

      {menuOpen && (
        <div className='menuMovil'>
          <div className="navbar-links">
            <NavLink
              to={'/'}
              activeClassName="active"
              isActive={(match, location) => {
                return location.hash === '' || location.hash === '#/';
              }}
            >
              Tiendas de Conveniencia
            </NavLink>

            <a href="/#promociones">
              Promociones
            </a>

            <a href="/#servicios">
              Servicios
            </a>

            <NavLink to={'/menu'} activeClassName="active" onClick={scrollToTop}>
              Menú
            </NavLink>

            <NavLink to={'/empleos'} activeClassName="active" onClick={scrollToTop}>
              Empleos
            </NavLink>

            <a href="#store">
              <span className='storeButton'>Tango Store <img src={paidSvg} alt="canasta-compra" /> </span>
            </a>
          </div>
        </div>
      )}

      <div className='menuDesktop'>
        <div className="navbar-links">
          <NavLink to={'/'} activeClassName="active" onClick={scrollToTop}>  
            Tiendas de Conveniencia
          </NavLink>

          <a href="/#promociones">
            Promociones
          </a>

          <a href="/#servicios">
            Servicios
          </a>

          <NavLink to={'/menu'} activeClassName="active" onClick={scrollToTop}>
            Menú
          </NavLink>

          <NavLink to={'/empleos'} activeClassName="active" onClick={scrollToTop}>
            Empleos
          </NavLink>
        </div>
      </div>

      <div className='menuDesktop'>
        <div className="navbar-links">
          <a href="#">
            <span className='storeButton'>Tango Store <img src={paidSvg} alt="canasta-compra" /> </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

