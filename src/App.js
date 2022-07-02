
import { useEffect,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //run-> npm install --save bootstrap@^4.0.0-alpha.6  react-bootstrap@^0.32.1
import 'bootstrap/dist/js/bootstrap.bundle.min';
 

 
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

  if (width>400){  
  return (
   <div><h1>Rinel big</h1></div>
  );
  }else{

  return (
    <div><h1>Rinel samll</h1></div>
   );
  }

}

export default App;
