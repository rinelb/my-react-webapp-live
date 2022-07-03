
import { useEffect,useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //run-> npm install --save bootstrap@^4.0.0-alpha.6  react-bootstrap@^0.32.1
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Books from "./pages/Books"
import Images from './components/book.jpeg';
 
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

  if (width>800){  
  return (
 
   <div className="APP-PC">
       
      <Books/>
      
    </div>
  );
  }else{

  return (
    
      <div className="APP-Mobile">
         
        <Books/>
      </div>
    
   );
  }

}

export default App;
