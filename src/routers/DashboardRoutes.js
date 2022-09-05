import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { Marvel } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import {Navbar} from '../components/ui/NavBar'
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    {/* <Route exact path="/marvel" component={Marvel}/> */}
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>
                    <Route exact path="/sushi" component={Marvel}/>
                    <Redirect to="/sushi"/>
                </Switch>
            </div>
        </>
    )
}
//rutas hijas NO TIENE ROUTER SOLO TIENE SWITCH Y PUEDE PASAR A CUALQUIER
//RUTA