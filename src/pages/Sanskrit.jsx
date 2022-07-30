import React, { createContext, useEffect, useState } from 'react';
import {Button, Col,Row, Form,FormControl, Container} from 'react-bootstrap' 
import Table from 'react-bootstrap/Table';
import Sanscript from '@indic-transliteration/sanscript';
import SanskritLetter from  '../data/Sanskrit.json'
import SanskritCons from  '../data/SankritConst.json'
import SankritVol from  '../data/SankritVowles.json'
import Sankrit3 from  '../data/Snakrit3.json'
import SanskritNum from  '../data/SankritNum.json'
import SanskritSplV from  '../data/ShankritSplVowle.json'
import SanskritRest from  '../data/SankritRest.json'
const bookNumber = 6
// const maxPageNumber = Math.floor(bookItems.length /6)
// const maxBooks = bookItems.length
const Sanskrit = ()=>{
    
   


    const [width, setWindowWidth] = useState(0)
    const [mobile, setMobile] = useState(0)
    const [word, setWord] = useState("")
    const [outputWord, setOutputWord] = useState("")
    const mobileWidth = 1000 

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
    
    //output the sanskrit word
    // useEffect(
    //      updateSankrit,
    //     [word]
    // )

    const updateSankrit = (event)=>{
        setOutputWord(Sanscript.t(event.target.value, 'hk', 'devanagari'))

    }
     const handleKeyPressPage  = (target)=> {
        if(target.charCode==13){
            
        } 
      }

    return(
         
            <>
            <center>
                <br/>
             <Form className="d-flex " style={{width:"15em",alignItems:"center"}}  >
                     <FormControl className="text-center" type="text" style={{alignContent:"middle"}} placeholder="Enter Word or Sentance" onChange={updateSankrit}/>
                </Form> <br></br>
                <h5>{outputWord}</h5>

                <hr></hr>
            </center>
             { (mobile==1) ?
             <>
             <center><h1>Sanskrit Mapping Code</h1><br/><br/></center>
                    <Container>  
                        <Row md={4} xs={4} lg={4} className="g-3 align-items-center "  >
                            {SankritVol.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>
                                <br></br>
                                <Row md={3} xs={3} lg={3} className="g-3 align-items-center "  >
                            {Sankrit3.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>

                                <br></br>
                                <Row md={5} xs={5} lg={5} className="g-3 align-items-center "  >
                             
                              {SanskritCons.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>

                                <br></br><br></br>
                                <Row md={5} xs={5} lg={5} className="g-3 align-items-center "  >
                             
                              {SanskritSplV.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>

                                <br></br><br></br>
                                <Row md={3} xs={3} lg={3} className="g-3 align-items-center "  >
                             
                              {SanskritRest.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>


                                <br></br><br></br>
                                <Row md={5} xs={5} lg={5} className="g-3 align-items-center "  >
                             
                              {SanskritNum.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>
                     </Container>
            </> 
            : // PC version
            <>
            <center><h1>Sanskrit Mapping Code</h1><br/><br/></center>
                    <Container>  
                        <Row md={4} xs={4} lg={4} className="g-3 align-items-center "  >
                            {SankritVol.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>
                                <br></br>
                                <Row md={3} xs={3} lg={3} className="g-3 align-items-center "  >
                            {Sankrit3.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>

                                <br></br>
                                <Row md={5} xs={5} lg={5} className="g-3 align-items-center "  >
                             
                              {SanskritCons.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>

                                <br></br><br></br>
                                <Row md={5} xs={5} lg={5} className="g-3 align-items-center "  >
                             
                              {SanskritSplV.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>

                                <br></br><br></br>
                                <Row md={5} xs={5} lg={5} className="g-3 align-items-center "  >
                             
                              {SanskritRest.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>


                                <br></br><br></br>
                                <Row md={5} xs={5} lg={5} className="g-3 align-items-center "  >
                             
                              {SanskritNum.map(letter => ( 
                                <Col className="text-center text-md-right bg-light" key={letter.id}><h5> {Sanscript.t(letter.letter, 'hk', 'devanagari')} : {letter.letter}</h5></Col>
                             ))} 
                                </Row>
                     </Container>
            </>
            }
             
            
                     </>

    );

}

export default Sanskrit