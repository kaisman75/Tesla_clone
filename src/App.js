import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import store from '../src/components/features/store'
import { carAction } from '../src/components/features/actions/action';





function App() {
  store.dispatch(carAction())  
  return (
    <div className="App">
    {/*--------ce ci est l'entete de la page---------*/}  
    <Header/>
    <Home/>
    </div>
    
  );
    


  
 
 
}

export default App;
