import React, {  createContext, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  './App.css'
import Navbar from './components/Navbar';
import { Route } from 'react-router';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ErrorPage from './components/Errorpage';
import { Switch } from 'react-router-dom';
import { reducer } from './reducer/useReducer';
import { initialState } from './reducer/useReducer';
export const UserContext = createContext();
const Routing =()=>{
return(<Switch><Route exact path='/'>
<Home/>
</Route>
<Route path="/contact">
<Contact/>
</Route>
<Route path="/about">
<About/>
</Route>
<Route path="/login">
<Login/>
</Route>
<Route path="/signup">
<Signup/>
</Route>

<Route path="/logout">
<Logout/>
</Route>
<Route>
<ErrorPage />
</Route></Switch>
);
}
const App =()=>{
 const[state,dispatch]= useReducer(reducer,initialState)
  return (<>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
<Routing/>
    </UserContext.Provider>
  </>);
}
export default App;