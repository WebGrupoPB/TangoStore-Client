import React, {useState} from 'react';
import './/Footer.css';
export const API_SERVER = 'http://localhost:5000';


import instagramBtn from "../assets/icons/Instagram Circle.png"
import facebookBtn from "../assets/icons/Facebook Circled.png"
import GoogleMapsBtn from "../assets/icons/Google Maps Old.png"
import squareclock from "../assets/icons/Square Clock.png"
import submitBtn from "../assets/icons/submitBtn.png"


const Footer = () => {

    const [formData, setFormData] = useState({
            email: '',
            phone: '',
            message: '',
        });

        const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
                const response = await fetch(API_SERVER + '/enviar-comentario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
        
                if (response.ok) {
                    // Manejar la respuesta exitosa aquí
                    console.log('Comentario enviado con éxito');
        
                    // Restablecer el formulario borrando los datos
                    setFormData({
                        email: '',
                        phone: '',
                        message: ''
                    });
                } else {
                    // Manejar errores aquí
                    console.error('Error al enviar comentario');
                }
            } catch (error) {
                console.error('Error al enviar comentario', error);
            }
        };
        

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (

        <footer>
            <div className='content'>

                <div className='footerInfo'>
                    <h3>Redes Sociales</h3>
                    <div>
                        <a href="https://www.google.com/maps/search/Tango+Store/@14.6294877,-91.6623839,9z/data=!3m1!4b1?entry=ttu" target='_blank'>
                            <img src={GoogleMapsBtn} alt="GoogleMaps" />
                        </a>
                        <a href="https://www.facebook.com/Tangostore.la?mibextid=LQQJ4d" target='_blank'>
                            <img src={facebookBtn} alt="Facebook" />
                        </a>
                        <a href="https://instagram.com/tangostore.la?igshid=MzRlODBiNWFlZA==" target='_blank'>
                            <img src={instagramBtn} alt="Instagram" />
                        </a>
                    </div>
                    <h3>Horarios</h3>
                    <div>
                        <img src={squareclock} alt="reloj" />
                        <p>Abierto las 24 horas</p>
                    </div>
                </div>

                <div className='footerLogo'>
                    <img src="https://i.ibb.co/s2rnyBP/logo-tango-footer.png" alt="tango-logo" />
                </div>

                <div className='footerForms'>

                    <div className='footerForms-title'>
                        <h3>Contactanos</h3>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div className='inputForm'>
                            <input
                                name='email'
                                type='email'
                                placeholder='correo'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                name='phone'
                                type='text'
                                placeholder='teléfono'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <button type='submit'>
                                <img src={submitBtn} alt="submit" />
                            </button>
                        </div>
                        <textarea
                            name='message'
                            cols='30'
                            rows='10'
                            placeholder=' mensaje'
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </form>

                </div>
            </div>

            <p>Todos los derechos reservados ©Tango, 2023</p>
        </footer>
  );
};

export default Footer;