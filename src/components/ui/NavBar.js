import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext)

    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login')
        dispatch({
            type: types.logout,

        })
    }
    const backToMenu = () => {

    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            {/* <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link> */}

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/sushi"
                    >
                        Tablas de sushi
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        Pizzas
                    </NavLink> */}
                    {/* <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-5 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    {/* <span
                        className="nav-item nav-link text-info"
                    >
                        {name}
                    </span> */}
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to=''
                    >
                        
                    </NavLink>
                    
                </ul>
            </div>
        </nav>
    )
}