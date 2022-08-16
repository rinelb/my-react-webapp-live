import React, { createContext, useEffect, useState } from 'react';
import {Button, Col,Row, Form,FormControl, Container} from 'react-bootstrap' 
import Table from 'react-bootstrap/Table';
import Sanscript from '@indic-transliteration/sanscript';
import SanskritWords from  '../data/SanksritWord.json'
 
import request from 'superagent';
const bookNumber = 6
// const maxPageNumber = Math.floor(bookItems.length /6)
// const maxBooks = bookItems.length
const SendSanskrit = ()=>{
    
   


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
    const sendData = (jsonV)=>{
      let stringValue =""
      
    
       
      console.log(jsonV)
   

             request
             .post('http://188.166.24.68:8080/sanskrit/posting')
             .set('Content-Type', 'application/json') 
             .send(jsonV)
             .end(function(err, res){
             //console.log(res.text)
             const dummy = outputWord + JSON.stringify(jsonV)+ "\n"
             setOutputWord(dummy)
             
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

const dummy = ()=>{
}

const send = ()=>{
    for (let i = 0; i < SanskritWords.length; i++) {
        SanskritWords[i].word = Sanscript.t(SanskritWords[i].sanskrit, 'devanagari', 'hk')
        SanskritWords[i].sanskrit=""
        sendData(SanskritWords[i])
        setTimeout(()=> {dummy()},1000);
        console.log("sending " + i);
      }
}




    return(
         
            <>
                <center>
                    <Button onClick={send}>Update</Button>
                    <br></br>
                    <p>{outputWord}</p>
                </center>
            </>

    );

}

export default SendSanskrit;