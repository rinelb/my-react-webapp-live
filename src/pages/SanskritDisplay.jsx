import React, { createContext, useEffect, useState } from 'react';
import {Button, Col,Row, Form,FormControl, Container,Dropdown,DropdownButton } from 'react-bootstrap' 
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
import CanvasDraw from "react-canvas-draw";
const bookNumber = 6
// const maxPageNumber = Math.floor(bookItems.length /6)
// const maxBooks = bookItems.length
const SanskritDisplay = ()=>{
    
   


    const [width, setWindowWidth] = useState(800)
    const [phonic, setPhonic] = useState("")
    const [sloka, setSloka] = useState("")
    const [knowledge, setKnowledge] = useState("")
    const [meaning, setMeaning] = useState("")
    const [knowledgeSelect, SetknowledgeSelect] = useState("Select Knowledge")
    const [sentresult,setSentresult] = useState([])
    const [displayArray,setDisplayArray] = useState([])
    const [displaySingleWord,setDisplaySingleWord]= useState("")
    const [mobile, setMobile] = useState(0)
    const [addWord, setAddWord] = useState(false)
    const [wordRaw, setWordRaw] = useState("")
    const [getData, SetGetData] = useState("")
    const [outputWord, setOutputWord] = useState("")
    const [saveableCanvas,SetsaveableCanvas]=useState()

     
    const [ startNext,  SetstartNext] = useState("start")
    const [ dMean, setDMean ] = useState("")
    const [ dSankrit, setDSankrit ] = useState("")
    const [ dPhonic, setDPhonic ] = useState("")
    const [ sMean, setSMean ] = useState(false)
    const [ sStart, setSStart ] = useState(false)
    const [ sSankrit, setSSankrit ] = useState(false)
    const [ sPhonic, setSPhonic ] = useState(true)

    // const [ ,  ] = useState("")

    const [whatToShow, setWhatToShow]= useState(true)
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

 
 

    const gotSanskrit =() =>{

          // setDisplayArray
         // nextWordSanskrit()
        } 

        

    useEffect(
       gotSanskrit,
        [sentresult]
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
    

  const getHttp = (knowledgeV)=>{
   const urlValue = 'http://188.166.24.68:8080/sanskrit/knowledge/'+knowledgeV
   
   console.log("url - " + urlValue)


          request
          .get(urlValue)
          .end(function(err, res){
          console.log(res.text);
          SetGetData(res.text)
          setSentresult(JSON.parse(res.text))
          setSStart(true)
          });  

       
      
 
}






     const handleKeyPressPage  = (target)=> {
        if(target.charCode==13){
            
        } 
      }

   

      const handleSelect=(e)=>{
        console.log(e);
        SetknowledgeSelect(e)
        getHttp(e)
      }

      const nextWordSanskrit=()=>{
        SetstartNext("Next")
        setSMean(false)
        const index = Math.floor(Math.random() * sentresult.length)
        // const item = sentresult[index];
        console.log("nexted clicked "+index)
        console.log(sentresult)
        console.log(sentresult[index].meaning)
        setDMean(sentresult[index].meaning)
        setDSankrit(Sanscript.t(sentresult[index].word, 'hk', 'devanagari'))
        setDPhonic(sentresult[index].phonic)

        
      }
      const onValueChange = (event)=> {
         console.log(event.target.id)
         if (event.target.id=='text'){
         setSPhonic(true)
         setSSankrit(false)
         }else{
          setSSankrit(true)
          setSPhonic(false)
         }
         
      }

      const toggleMeaning = ( )=> {
        setSMean(true)
        
        
     }

      const clearDrawing = ( )=> {
        const context = CanvasDraw.getContext('2d');

context.clearRect(0, 0, CanvasDraw.width, CanvasDraw.height);
       
        
     }

     

    return(
         
        <>
              <center>
                  <DropdownButton
                        alignRight
                        title={knowledgeSelect}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                      
                          >
                                <Dropdown.Item eventKey="gyatri">Gyatri</Dropdown.Item>
                                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                  </DropdownButton>
                  <br/>
                  

                  <h2>{displaySingleWord}</h2>
    <Form>
       
        <div key={'inline-radio'} className="mb-3">
          <Form.Check
            inline
            label="Sanskrit"
            name="group1"
            type={'radio'}
            id={'sanskrit'}
            checked={sSankrit}
            onClick={onValueChange}
          />
          <Form.Check
            inline
            label="Text"
            name="group1"
            checked='yes'
            type={'radio'}
            id={'text'}
            checked={sPhonic}
            onClick={onValueChange}
          />
          
        </div>
        {(sStart)?<><Button  className='p-2 m-2' variant="success" onClick={nextWordSanskrit}>{startNext}</Button></>:<></>}
                   
        <Button className='p-2 m-2' onClick={toggleMeaning}>Show Meaning</Button>
        {(sPhonic)?<><h3>{dPhonic}</h3></>:<></>}
        {(sSankrit)?<><h3>{dSankrit}</h3></>:<></>} 
        {(sMean)?<><h3>{dMean}</h3></>:<></>} <br></br>
      
    </Form>

                  <CanvasDraw ref={canvasDraw => (SetsaveableCanvas(canvasDraw))}  lazyRadius={1} brushRadius={3} 
                  brushColor={"blue"} canvasWidth={width}  canvasHeight={200}/>
                  <br/>
                  <Button className='p-2 m-2' onClick={() => {
              saveableCanvas.eraseAll();}}>clear</Button>
                  <Button className='p-2 m-2' onClick={() => {
              saveableCanvas.undo();}}>undo</Button>
                  <br/>
                

                 
                  

                  {/* {sentresult.map(word => ( 
                              <h5>  {word.word}</h5>
                             ))}  */}
                  
                
                </center>
             { (mobile==1) ?
             <>


             
            </> 
            : // PC version
            <>
           
            </>
            }
             
            
        </>

    );

}

export default SanskritDisplay