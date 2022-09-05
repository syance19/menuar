import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if (!hero) {
        return <Redirect to="/" />
    }
    const glbUrl = `/assets/heroes/${hero.urlGlb}`;
    const glbUrlToJson = JSON.stringify(glbUrl);
    const myArray = glbUrlToJson.split("/assets/heroes/");
    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
        descripcion
    } = hero;


    return (
        <Fragment>
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={`/assets/heroes/${hero.idInfo}.png`}
                        alt={superhero}
                        className="img-thumbnail animate__animated  animate__fadeInLeft"
                    ></img>
                </div>
                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Producto</b>
                            {alter_ego}
                        </li>
                        <li className="list-group-item">
                            <b>Descripción</b>
                            {descripcion}
                        </li>
                        <li className="list-group-item">
                            <b>Precio</b>
                            {first_appearance}
                        </li>
                    </ul>
                    <h5>Sabores</h5>
                    <p>{characters}</p>
                    <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Volver al menú
                    </button>
                </div>
            </div>
            <div id="card">
                <model-viewer
                    src={myArray[1]}
                    ar ar-modes="scene-viewer webxr quick-look"
                    camera-controls poster="poster.webp"
                    shadow-intensity="1"
                    auto-rotate />
            </div>
        </Fragment>
    )
}
