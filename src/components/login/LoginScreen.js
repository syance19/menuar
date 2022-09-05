import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin=()=>{
        // history.push('/'); //conserva el historial y puedo devolverme en cualquier momento con el back
        // 

        const lastPath=localStorage.getItem('lastPaht') || '/';
        dispatch({
            type:types.login,
            payload:{
                name:'Sergio'
            }
        })
        history.replace(lastPath); //borra el historial y no de permite hacer el backtip en la pagina 
    }
    return (
        <div className="container mt-5">
            <h1>Login </h1>
            <hr/>
            <button
            className="btn btn-primary"
            onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
