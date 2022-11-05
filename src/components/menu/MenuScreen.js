import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { menu } from '../../data/menu'
import { HeroCard } from '../heroes/HeroCard'
import { MenuCard } from './MenuCard'

export const MenuScreen = () => {
    return (
        <Fragment>
            <br/>
            <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
            {
                menu.map(menu => (
                    <MenuCard
                        key={menu.id}
                        {...menu}
                    />
                ))
            }
            </div>
        </Fragment>
    )
}
