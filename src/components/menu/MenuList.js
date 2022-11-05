import React, { useMemo } from 'react'
import { menu } from '../../data/menu';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';
import { MenuCard } from './MenuCard';
import { getTiendas } from '../../selectors/getHeroesByPublisher'

export const MenuCard = ({ publisher }) => {

    const menu= useMemo(()=>getTiendas(publisher), [publisher])

    return (
        <Fragment>
        {/* <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
            {
                menu.map(menu => (
                    <MenuCard
                        key={menu.id}
                        {...menu}
                    />
                ))
            }
        </div> */}  
        </Fragment>
    )
}
