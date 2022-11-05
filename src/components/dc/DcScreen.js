import React from 'react'
import { HeroList } from '../heroes/HeroList'
import { Link } from 'react-router-dom';

export const DcScreen = () => {
    const handleInStore = () => {
        localStorage.setItem('test', false);
    }
    return (
        <div>
          
            <h1>Productos disponibles</h1>
            <Link to={`/menu`} className="my-card-menu" onClick={handleInStore}>
                <h5>Volver al menú</h5>
            </Link>
            <hr />
            <HeroList publisher="DC Comics" />
        </div>
    )
}
