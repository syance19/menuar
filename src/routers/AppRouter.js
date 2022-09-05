import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import {PrivateRoute} from './PrivateRoute'
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                    exact 
                    path="/login" 
                    component={LoginScreen} 
                    isLogged={user.logged}
                    />

                    <PrivateRoute  
                    path="/" 
                    component={DashboardRoutes}
                    isLogged={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}

//SISTEMA DE RUTAS PRINCIPAL DONDE RECIBE RUTAS HIJAS
//DASHBOIARD ROUTES 