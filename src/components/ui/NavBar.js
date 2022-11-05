import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext)

    const history = useHistory();

    let isInASotre = false;
    let route = localStorage.getItem('test');
    let lastRoute = localStorage.getItem('lastPaht');


    const handleLogout = () => {
        history.replace('/login')
        dispatch({
            type: types.logout,

        })
    }

    console.log(route);
    console.log(lastRoute);





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

                    {lastRoute === '/menu' ? <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"

                    >
                        Plátano en rodajas
                    </NavLink> : <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to='/platanoRodajas'
                    >
                        Plátano en rodajas
                    </NavLink>}
                    {lastRoute === '/menu' ? <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to='/'
                    >
                        Plátano entero

                    </NavLink> : <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to='/platanoEntero'
                    >
                        Plátano entero
                    </NavLink>}
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