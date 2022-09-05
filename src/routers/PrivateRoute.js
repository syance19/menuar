import React from 'react';
import { Redirect } from 'react-router-dom';
import {
    Route,
} from "react-router-dom";
import PropTypes from 'prop-types';
export const PrivateRoute = ({
    isLogged,
    component: Component,
    ...rest
}) => {
    localStorage.setItem('lastPaht',rest.location.pathname)
    return (
        <Route {...rest}
            component={(props) => (
                (isLogged)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}