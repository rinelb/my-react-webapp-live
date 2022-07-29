import React, { createContext, useEffect, useState } from 'react';
import {Button, Col,Row, Form,FormControl, Container} from 'react-bootstrap' 
import Table from 'react-bootstrap/Table';
import Sanscript from '@indic-transliteration/sanscript';
import SanskritLetter from  '../data/Sanskrit.json'
 
const bookNumber = 6
// const maxPageNumber = Math.floor(bookItems.length /6)
// const maxBooks = bookItems.length
const Sanskrit = ()=>{
    
   


    const [width, setWindowWidth] = useState(0)
    const [mobile, setMobile] = useState(0)
    const mobileWidth = 1000
    const temp =  Sanscript.t('', 'hk', 'devanagari')

    // const temp1 = Sanscript.t()
  
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

 
 

    const runOnce =() =>{
       
    
    
        } 

        

    useEffect(
       runOnce,
        []
    )
    // useEffect(
    //     updateList,
    //     [bookDisplaySearch]
    // )
 
   
 

    
         

 


    const handleKeyPressPage  = (target)=> {
        if(target.charCode==13){
            
        } 
      }
 

    
    return(
         
            <>
            
             { (mobile==1) ?
             <>
             <center><h1>Sanskrit Mapping Code</h1><br/><br/></center>
            <Container>     
                    <Row md={2} xs={2} lg={2} className="g-2  align-items-center"  >
                        {SanskritLetter.map(letter => (
                            
                             
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h1> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter} </h1></Col> 

                        ))} 
                </Row>
           </Container>
            </> 
            : // PC version
            <>
            <center><h1>Sanskrit Mapping Code</h1><br/><br/></center>
                    <Container>  
                        <Row md={6} xs={6} lg={6} className="g-3 align-items-center "  >
                            {SanskritLetter.map(letter => (
                                
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h1> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h1></Col>
                            ))} 
                                </Row>
                     </Container>
            </>
            }
             
            
                     </>

    );

}

export default Sanskrit