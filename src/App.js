
import React from 'react';
import { useEffect,useState } from 'react';

import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //run-> npm install --save bootstrap@^4.0.0-alpha.6  react-bootstrap@^0.32.1
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Books from "./pages/Books"
import Home from "./pages/Home"
import Navigation from './components/Navigation';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

import Images from './components/book.jpeg';
import Course from './pages/Course';
import NavigationMobile from './components/NavigationMobile'
import About from './pages/About';
import AOL from './pages/AOL';
import Sanskrit  from './pages/Sanskrit';
import SendSanskrit from './pages/SendSanksrit';
import SanskritDisplay from './pages/SanskritDisplay';
import SanskritDisplayLetter from './pages/SanskritDisplayLetter';
 
// import Container from 'react-bootstrap' //npm install react-bootstrap bootstrap
 
function App() {

  const [width, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(0)
  const mobileWidth = 1000

   useEffect(() => { 

     updateDimensions();

     window.addEventListener('resize', updateDimensions);
     return () => 
       window.removeEventListener('resize',updateDimensions);
    }, [])

    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      if (width>mobileWidth)
      {
        setMobile(0)
      }else{
        setMobile(1)
      }
      console.log("size = " + width)
    }

    const showNav= {
      display: width>mobileWidth ? 'flex' : 'none'
      
    }
    const showMenuIcon = {
      display: width>mobileWidth ? 'none' : 'flex',
    }

    return (
      <>{ (width>mobileWidth) ?
      <> 
        <div>
          <Navigation/>
            <Routes>                
              <Route path='/books'  element={<Books/>} /> 
              <Route path='/courses'  element={<Course/>} /> 
              <Route path='/sanskrit/letters'  element={<Sanskrit/>} /> 
              <Route path='/sanskrit/updatesanskrit'  element={<SendSanskrit/>} />   
              <Route path='/sanskrit/learnBasic'  element={<SanskritDisplayLetter/>} /> 
              <Route path='/sanskrit/learnMantra'  element={<SanskritDisplay/>} />    
              <Route path='/about'  element={<About/>} /> 
              <Route path='/aol'  element={<AOL/>} /> 
              <Route path='/'element={<Home mobile={mobile}/>} />            
          </Routes>
        </div> 
      </>
      :
      <> 
        <div>
          <NavigationMobile/>
            <Routes>                
              <Route path='/books'  element={<Books/>} /> 
              <Route path='/courses'  element={<Course/>} />  
              <Route path='/updatesanskrit'  element={<SendSanskrit/>} />   
              <Route path='/sanskrit/learnMantra'  element={<SanskritDisplay/>} />    
              <Route path='/sanskrit/learnBasic'  element={<SanskritDisplayLetter/>} />  
              <Route path='/sanskrit/letters'  element={<Sanskrit/>} />   
              <Route path='/about'  element={<About/>} /> 
              <Route path='/aol'  element={<AOL/>} /> 
              <Route path='/'element={<Home/>} />            
          </Routes>
        </div> 
      </>


      }
      </>
)
  // if (width>800){  
  // return (
 
  //  <div className="APP-PC">
       
  //     <Books/>
      
  //   </div>
  // );
  // }else{

  // return (
    
  //     <div className="APP-Mobile">
         
  //       <Books/>
  //     </div>
    
  //  );
  // }

}

export default App;
