import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import './HeroCard.css';

export const HeroCard = ({ id,idInfo, superhero, publisher, alter_ego, first_appearance, characters,restaurante }) => {
    const heroImageUrl = `/assets/heroes/${ id }.jpg`;
    
    return (
        <Fragment>
            <Link to={`./hero/${id}`} className="my-card" >
                <img src={heroImageUrl} className="img img-responsive" alt={superhero} />
                <div className="profile-name">{superhero}</div>
                <div className="profile-position"></div>
                <div className="profile-overview">
                    <div className="profile-overview">
                        <div className="row">
                            <div className="col-ms-4">
                                <h3>{restaurante}</h3>
                                <p>Precio: <br />{first_appearance}</p>
                                {
                                    (alter_ego !== characters)
                                    && <p>{characters}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
};
