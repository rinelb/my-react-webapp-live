
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
 
// import Container from 'react-bootstrap' //npm install react-bootstrap bootstrap
 
function App() {

  const [width, setWindowWidth] = useState(0)
   useEffect(() => { 

     updateDimensions();

     window.addEventListener('resize', updateDimensions);
     return () => 
       window.removeEventListener('resize',updateDimensions);
    }, [])

    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      console.log("size = " + width)
    }

    const showNav= {
      display: width>200 ? 'flex' : 'none'
    }
    const showMenuIcon = {
      display: width>200 ? 'none' : 'flex',
    }

    return (
      <>{ (width>500) ?
      <> 
        <div>
          <Navigation/>
            <Routes>                
              <Route path='/books'  element={<Books/>} /> 
              <Route path='/courses'  element={<Course/>} />   
              <Route path='/'element={<Home/>} />            
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
