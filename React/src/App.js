import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Index from './components/pages/Index'
import Registro from './components/pages/Registro'
import Login from './components/pages/Login'
import Productos from './components/pages/Productos'
import Admin from './components/pages/Admin'
import User from './components/pages/User'
import Cesta from './components/pages/Cesta'
import Comentarios from './components/pages/Comentarios'

import AutenticacionState from './context/autenticacion/autenticacionState';

import RoutePrivado from './components/rutas/RoutePrivado';

const App = () => {
  return (                                                     
    <AutenticacionState>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/registro' component={Registro} />
            <Route exact path='/login' component={Login} />
            <RoutePrivado exact path='/productos' component={Productos} />
            <RoutePrivado exact path='/admin' component={Admin} />
            <RoutePrivado exact path='/user' component={User} />
            <RoutePrivado exact path='/cesta' component={Cesta} />
            <RoutePrivado exact path='/comentarios' component={Comentarios} />
          </Switch>
        </BrowserRouter>
    </AutenticacionState>
  );
}

export default App;
