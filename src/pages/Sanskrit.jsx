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
import request from 'superagent';
const bookNumber = 6
// const maxPageNumber = Math.floor(bookItems.length /6)
// const maxBooks = bookItems.length
const Sanskrit = ()=>{
    
   


    const [width, setWindowWidth] = useState(0)
    const [phonic, setPhonic] = useState("")
    const [sloka, setSloka] = useState("")
    const [knowledge, setKnowledge] = useState("")
    const [meaning, setMeaning] = useState("")
    const [postId, setPostId] = useState("")
    const [sentresult,setSentresult] = useState("")

    const [mobile, setMobile] = useState(0)
    const [addWord, setAddWord] = useState(false)
    const [wordRaw, setWordRaw] = useState("")
    const [outputWord, setOutputWord] = useState("")
    const [outputWordReverse, setOutputWordReverse] = useState("")
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
        
        setWordRaw(event.target.value)

    }

    
    const checking_sankrit = (event)=>{
      setOutputWordReverse(Sanscript.t(event.target.value, 'devanagari', 'hk'))
       

  }

// POST /sanskrit/posting HTTP/1.1
// Host: 188.166.24.68
// Content-Type: application/json
// Content-Length: 98
    const sendData = ()=>{
      let stringValue =""
      let actualSent = false
      if (outputWordReverse==""){
      
         stringValue = '{"mean":"'+meaning+'","word":"'+wordRaw+'","has":"n","audio":"","sloka":"'+sloka+'","know":"'+knowledge+'","phonic":"'+phonic+'"}'
      }else{
        actualSent = true
         stringValue = '{"mean":"'+meaning+'","word":"'+outputWordReverse+'","has":"n","audio":"","sloka":"'+sloka+'","know":"'+knowledge+'","phonic":"'+phonic+'"}'
     

      }
      const jsonString = JSON.parse(stringValue)
      console.log(jsonString)
   

             request
             .post('http://188.166.24.68:8080/sanskrit/posting')
             .set('Content-Type', 'application/json') 
             .send(jsonString)
             .end(function(err, res){
             console.log(res.text);
             if (actualSent){
               setSentresult(Sanscript.t( wordRaw,  'hk','devanagari')+" was sent")
             }else{
              setSentresult(Sanscript.t( outputWordReverse,  'hk','devanagari')+" was sent")
             }
            });  

    
    
  }

  const getHttp = ()=>{
   const stringValue = '{"mean":"'+meaning+'","word":"'+wordRaw+'","has":"n","audio":"","sloka":"'+sloka+'","know":"'+knowledge+'","phonic":"'+phonic+'"}'
   const jsonString = JSON.parse(stringValue)
   console.log(jsonString)


          request
          .get('http://188.166.24.68:8080/sanskrit/baa')
          .end(function(err, res){
          console.log(res.text);
          });  

       
      
 
}






     const handleKeyPressPage  = (target)=> {
        if(target.charCode==13){
            
        } 
      }

      const toggleIsLoading = () => {
         // 👇️ passed function to setState
         setAddWord(current => !current);
       };
       const dummy = () => {
         // 👇️ passed function to setState 
       };

       const clear_form = () => {
       
      };


    return(
         
            <>
            <center>
            {/* <Button onClick={ getHttp }>test Get</Button>
                <br/><br/>
            <br/><br/> */}
               <Button onClick={ toggleIsLoading }>Add Word/Sentence</Button>
                <br/><br/>
                {(addWord)?
                <>
                      <label >Create the word :<Form className="d-flex " style={{width:"15em",alignItems:"center"}}  >
                              <FormControl className="text-center" type="text" 
                              style={{alignContent:"middle"}} placeholder="Create devanagari" 
                              onChange={updateSankrit}/><br></br></Form></label> &nbsp;or &nbsp; 

                        <label >Devanagari Directly: <Form className="d-flex " style={{width:"15em",alignItems:"center"}}  >
                              <FormControl className="text-center" type="text" style={{alignContent:"middle"}} placeholder="e.g. भूर्भुवः" onChange={checking_sankrit}/>
                              </Form></label><br></br>
                         
                        <br></br>

                         <h5>{outputWord}</h5>  
                        {/* <label >Devanagari<Form className="d-flex " style={{width:"15em",alignItems:"center"}}  >
                              <FormControl className="text-center" type="text" style={{alignContent:"middle"}} placeholder={outputWord} onChange={dummy}/>
                        </Form> </label> <br></br><br></br> */}


    

                        <label >Pronouncation<Form className="d-flex " style={{width:"15em",alignItems:"center"}}  >
                              <FormControl className="text-center" type="text" style={{alignContent:"middle"}} placeholder="e.g. Aacha" onChange={(event)=>{ setPhonic(event.target.value)  }}/>
                        </Form></label> <br></br><br></br>

                        <label >English Mean<Form className="d-flex " style={{width:"15em",alignItems:"center"}}  >
                              <FormControl className="text-center" type="text" style={{alignContent:"middle"}} placeholder="e.g. Yes" onChange={(event)=>{ setMeaning(event.target.value)  }}/>
                        </Form></label> <br></br><br></br>

                        <label >Knowledge<Form className="d-flex " style={{width:"15em",alignItems:"center"}}  >
                              <FormControl className="text-center" type="text" style={{alignContent:"middle"}} placeholder="e.g. Bhagwagita" onChange={(event)=>{ setKnowledge(event.target.value)  }}/>
                        </Form></label> <br></br><br></br>
                        <label >Sloka Number<Form className="d-flex " style={{width:"15em",alignItems:"center"}}  >
                              <FormControl className="text-center" type="text" style={{alignContent:"middle"}} placeholder="e.g. 1-2" onChange={ (event)=>{ setSloka(event.target.value)  }}/>
                        </Form></label> <br></br><br></br>
                        <h4>{sentresult}</h4>
                        <Button onClick={ sendData }>Send Word</Button> 
                        

                </>
               :<></>
               }
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