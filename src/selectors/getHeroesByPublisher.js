

import {heroes} from '../data/heroes';
import { menu } from '../data/menu';

export const getHeroesByPublisher= (publisher)=>{
    const validPublishers= ['DC Comics','Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    } 

    return heroes.filter(hero=> hero.publisher===publisher);
}


export const getTiendas= (publisher)=>{
    const validPublishers= ['DC Comics','Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    } 

    return menu.filter(hero=> hero.nombre===publisher);
}