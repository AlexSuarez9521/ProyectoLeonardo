import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AutenticacionContext from '../../context/autenticacion/autenticacionContext';

const RoutePrivado = ({ component: Component, ...props }) => {

    const autenticacionContext = useContext(AutenticacionContext);
    const { autenticado } = autenticacionContext;

    return (
        <Route {...props} render={ props => !autenticado ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )  } />
    );
}

export default RoutePrivado