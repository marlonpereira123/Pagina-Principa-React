import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './pages/Login'
import Routes from './Routes'
import './App.css'


function App(){

    const [user, setUser] = useState(
     null
    );

    if(user === null){
      return(
        <Login/>
      );
    }


  return (
    <BrowserRouter>
      <Header/>

        <Routes/>
        
      <Footer/>
    </BrowserRouter>  
  );
}

export default App;