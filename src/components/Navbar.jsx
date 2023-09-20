import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import paidSvg from '../assets/icons/Paid.svg';
import './/Navbar.css';


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

  return (

    <nav className="navbar">
        <div className="navbar-logo"><Link to={"/"}><img src="https://i.ibb.co/gZTfkzs/Logo-Tango-1.png" alt="logo-tango" /></Link></div>

        
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
              <NavLink to={'/'} 
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
                Tiendas de Conveninencia
              </NavLink>

              <NavLink to={'/menu'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
                Menú
              </NavLink>

              {/* <NavLink to={'/promociones'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
                Promociones
              </NavLink>

              <NavLink to={'/servicios'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
                Servicios
              </NavLink> */}

              <NavLink to={'/empleos'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }>
                Empleos
              </NavLink>
                

              <a href="#store"><span className='storeButton'>Tango Store <img src={paidSvg} alt="canasta-compra"/> </span></a>  
            </div>

            
          </div>
        )}
        
        
        <div className='menuDesktop'>
          <div className="navbar-links">
            <NavLink to={'/'} 
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              Tiendas de Conveninencia
            </NavLink>

            <NavLink to={'/menu'} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              Menú
            </NavLink>

            {/* <NavLink to={'/promociones'} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              Promociones
            </NavLink>

            <NavLink to={'/servicios'} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              Servicios
            </NavLink> */}

            <NavLink to={'/empleos'} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              Empleos
            </NavLink>
              
          </div>
        </div>
        
        

        <div className='menuDesktop'>
          <div className="navbar-links"><a href="#store"><span className='storeButton'>Tango Store <img src={paidSvg} alt="canasta-compra"/> </span></a></div>
        </div>
        
        
    </nav>

  );
};

export default Navbar;
