import React from 'react';
import Space_img from '../assests/spaceman.svg'
import Space_gif from '../assests/space-gif-space.gif'

 


const Home = (props)=>{

    return(
        <>{ (props.mobile ==0)? 
            <body style={{
            background:"black"
            
          }}><center> 
             
                <div
                style={{
                    backgroundImage: "url(" + Space_gif + ")",
                    width:"60%", 
                    backgroundSize: 'cover'
                    
                  }}
                  
                   >
                   
                
                <h1 style={{color:'white'
                    
                }}>A world beyond our UNIVERSE'S</h1>
                <img src={Space_img} className="App-logo" alt="logo" style={{
                    width:"5%"
                  }}/>
                  
                  
                </div>
                 
        </center>
        </body>
        :

        <body style={{
            background:"black"
            
          }}><center> 
             
                <div
                style={{
                    backgroundImage: "url(" + Space_gif + ")",
                    width:"100%", 
                    backgroundSize: 'cover'
                    
                  }}
                  
                   >
                   
                
                <h1 style={{color:'white'
                    
                }}>A world beyond our UNIVERSE'S</h1>
                <img src={Space_img} className="App-logo" alt="logo" style={{
                    width:"5%"
                  }}/>
                  
                  
                </div>
                 
        </center>
        </body>
}</>
   
  
    )
}

export default Home;