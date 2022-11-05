import React from 'react'
import { HeroList } from '../heroes/HeroList'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

export const Marvel = () => {
    const handleInStore = () => {
        localStorage.setItem('test', false);

    }
    return (
        <Fragment>
        <div>
            <h1>Plátano en rodajas</h1>
            <Link to={`/menu`} className="my-card-menu" onClick={handleInStore}>
                <h5>Volver al menú</h5>
            </Link>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
        </Fragment>
    )
}
