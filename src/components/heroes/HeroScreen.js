import React, { useMemo, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min';
import { getHeroesById } from '../../selectors/getHeroById';
import SendMessages from "../SendMessage";
import Footer from "../layout/Footer";
import CreatorLink from "../layout/CreatorLink";

let itemToEdit = 0;
export const HeroScreen = ({ history }) => {
    const [count, setCount] = useState(0);
    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
    itemToEdit = 0;
    const decrementCount = () => {
        if (count > 0) setCount(count - 1);
        itemToEdit={count};
    };
    const incrementCount = () => {
        setCount(count + 1);;
        itemToEdit={count};
    };
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
        descripcion,
        descripcion2,
        descripcion3,
        descripcion4
    } = hero;
    localStorage.setItem('cantidad',count);
    console.log(localStorage.getItem('cantidad'));
    return (
        <Fragment>
            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={`/assets/heroes/${hero.idInfo}.jpg`}
                        alt={superhero}
                        className="img-thumbnail animate__animated  animate__fadeInLeft"
                    ></img>
                </div>
                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Producto:</b> &nbsp;
                            {alter_ego}
                        </li>
                        <li className="list-group-item">
                            <b>Peso:</b> &nbsp;
                            {descripcion}
                        </li>
                        <li className="list-group-item">
                            <b>Características:</b> &nbsp;
                            <br />
                            {descripcion2}
                            <br />
                            {descripcion3}
                            <br />
                            {descripcion4}

                        </li>
                        <li className="list-group-item">
                            <b>Precio:</b> &nbsp;
                            {first_appearance}
                        </li>
                    </ul>
                    <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Volver al menú
                    </button>
                    &nbsp;&nbsp;
                    <h3>Cantidad</h3>
                    <button onClick={decrementCount}>-1</button>
                    <input
                        type="number"
                        name="clicks"
                        value={count}
                        onChange={(event) => {
                            const value = Number(event.target.value);
                            setCount(value);
                        }}
                    />
                    <button onClick={incrementCount}>+1</button>

                </div>

            </div>


            <div style={{ width: "100vw", height: "100vh" }} className='flex_middle'>
                <CreatorLink />
                <SendMessages itemToEdit />
            </div>
        </Fragment>
    )
}
