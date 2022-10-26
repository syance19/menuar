import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { menu } from '../../data/menu'
import { HeroCard } from '../heroes/HeroCard'
import { MenuCard } from './MenuCard'

export const MenuScreen = () => {
    return (
        <Fragment>
            <div className="animate__animated animate__fadeIn">
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
