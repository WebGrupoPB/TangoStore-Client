import React from 'react';
import { Link } from 'react-router-dom';

import paidSvg from '../assets/icons/Paid.svg';
import './ProfileCard.css';



const ProfileCards = ( { children,  puesto, img} ) => {
  return (

    <div className='totalCard'>
        <article className="tw-followCard">
            <div>
                <img src={img}
                    alt="profile-img" 
                    className="tw-followCard-avatar" />

                <div className="tw-followCard-header">
                    <div>
                        <strong>{puesto}</strong>
                    </div>
                    <span className="tw-followCard-infoUserName">
                        {children}
                    </span>

                </div>
            </div>
            

            <aside>
                <button className="tw-followCard-button">
                    <span className="tw-followCard-text">APLICAR</span>
                </button>
            </aside>

        </article>
    </div>

    

  );
};

export default ProfileCards;