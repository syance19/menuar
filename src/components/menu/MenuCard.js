import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import '../heroes/HeroCard.css';

export const MenuCard = ({ id, nombre, idProd }) => {
    const heroImageUrl = `/assets/tiendas/${id}.png`;
    let route = '';
    const handleInStore = () => {
        let validation = localStorage.getItem('lastPaht');
        localStorage.setItem('test', true);
    }


    return (
        <Fragment>
            <Link to={`/${idProd}`} className="my-card-menu" onClick={handleInStore}>
                <img src={heroImageUrl} className="img img-responsive"/>
                <div className="profile-name">{nombre}</div>

            </Link>
        </Fragment>
    );
};
