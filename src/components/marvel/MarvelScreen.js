import React from 'react'
import { HeroList } from '../heroes/HeroList'
import { NavLink} from 'react-router-dom'
export const Marvel = () => {
    return (
        <div>
            <h1>Sushi</h1>
            <a href='/menu'>Volver a todas las tiendas</a>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
