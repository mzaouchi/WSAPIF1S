import logo from './logo.svg';
import './App.css';
import ListUsers from './Component/ListUsers';
import { Route, Switch } from 'react-router-dom';
import NavbarUser from './Component/NavbarUser';
import Home from './Home';
import User from './Component/User';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div>
 
      <NavbarUser isAuth={isAuth} setIsAuth={setIsAuth}/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <PrivateRoute isAuth={isAuth} path='/Listofusers' component={ListUsers}/>
        <Route path='/User/:id' render={(props)=><User {...props}/>} />
      </Switch>
    </div>
  );
}

export default App;
