import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Routes from './Routes'
import './App.css'

function App(){

  return (
    <BrowserRouter>
      <Header/>
        <Routes/>
      <Footer/>
    </BrowserRouter>  
  );
}

export default App;