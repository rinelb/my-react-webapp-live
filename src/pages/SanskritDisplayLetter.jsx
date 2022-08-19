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
const SanskritDisplayLetter = ()=>{
    
   


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
    

    const [ sVowels, SetSVowels] = useState(true)
    const [ sVowelsTest, SetSVowelsTest] = useState(false)
    const [ startNext,  SetstartNext] = useState("Start Test")
    const [ dMean, setDMean ] = useState("")
    const [ dSankrit, setDSankrit ] = useState("")
    const [ dPhonic, setDPhonic ] = useState("")
    const [ sLetter, setSLetter ] = useState(false)
    const [ sStart, setSStart ] = useState(false)
    const [ sSankrit, setSSankrit ] = useState(true)
    const [ sPhonic, setSPhonic ] = useState(false)
    const [ showLetter, setShowLetter ] = useState("")
    const [ previousWord, setPreviousWord] = useState("")
    const [ previousPhonic, setPreviousPhonic] = useState("")
    const [ currentWord, setCurrentWord] = useState("")
    const [ currentPhonic, setCurrentPhonic] = useState("")
    const [ showPrevious, SetShowPrevious] = useState(false)
    const [ showAll, setShowAll  ] = useState("")

    const [  sAnswer,SetSAnswer ] = useState(false)
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
    

   






     const handleKeyPressPage  = (target)=> {
        if(target.charCode==13){
            
        } 
      }

   

       

      const nextWordSanskrit=()=>{
        saveableCanvas.eraseAll()
        SetstartNext("Next Word")
        setSLetter(false)
        SetShowPrevious(true)
        setPreviousWord(currentWord)
        setPreviousPhonic(currentPhonic)
        SetSAnswer(true)
        let indexVowel
        let indexConst
        if (sVowelsTest){
          indexVowel = Math.floor(Math.random() * (16))
          indexConst = 19
        }else{
          indexConst =19+ Math.floor(Math.random() * (54-20))
            if (sVowels){
                indexVowel = Math.floor(Math.random() * (16))
                // const item = sentresult[index];
                console.log("nexted clicked "+indexVowel)
                
            }else{
              indexVowel = 0

            }
        }
         
        console.log("nexted Constant "+indexConst +"\nnext vowel " + indexVowel)
       
        const tempWord = ""+SanskritLetter[indexConst].letter+SanskritLetter[indexVowel].letter
         
        setCurrentWord(tempWord)
        setDSankrit(Sanscript.t(tempWord, 'hk', 'devanagari'))
        setDPhonic(""+SanskritLetter[indexConst].phonic+SanskritLetter[indexVowel].phonic)
        setCurrentPhonic(""+SanskritLetter[indexConst].phonic+SanskritLetter[indexVowel].phonic)
        if (!sSankrit){
          setShowLetter(Sanscript.t(tempWord, 'hk', 'devanagari'))
        }else{
          setShowLetter(SanskritLetter[indexConst].phonic+SanskritLetter[indexVowel].phonic)
        }

        
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

      const onValueChangeVolwes = (event)=> {
        SetSVowels(!sVowels)
        
     }

     const onValueChangeVolwesTest = (event)=> {
      SetSVowelsTest(!sVowelsTest)
      
   }

   const onValueChangeShowAll= ( )=> {
    setShowAll(!showAll)
   
    
    
    
 }

      const toggleMeaning = ( )=> {
        setSLetter(true)
       
        
        
        
     }

      const clearDrawing = ( )=> {
        const context = CanvasDraw.getContext('2d');

context.clearRect(0, 0, CanvasDraw.width, CanvasDraw.height);
       
        
     }

    const previousWordFunction = ( )=> {
        SetShowPrevious(false)
        
        setCurrentWord(previousWord)
        setCurrentPhonic(previousPhonic)
        setDSankrit(Sanscript.t(previousWord, 'hk', 'devanagari'))
        setDPhonic(previousPhonic)
        if (!sSankrit){
          setShowLetter(Sanscript.t(previousWord, 'hk', 'devanagari'))
        }else{
          setShowLetter(previousPhonic)
        }

     }

     

    return(
         
        <>
              <center>
                  
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
            type={'radio'}
            id={'text'}
            checked={sPhonic}
            onClick={onValueChange}
          />
          <Form.Check
            inline
            label="Randomise vowel"
            name="group1" 
            type={'checkbox'}
            id={'vowel'}
            checked={sVowels}
            onClick={onValueChangeVolwes}
          /><br></br>
          <Form.Check
            inline
            label="only vowel"
            name="group1" 
            type={'checkbox'}
            id={'vowelTest'}
            checked={sVowelsTest}
            onClick={onValueChangeVolwesTest}
          />

        <Form.Check
            inline
            label="show all"
            name="group1" 
            type={'checkbox'}
            id={'showall'}
            checked={showAll}
            onClick={onValueChangeShowAll}
          />
          
        </div>
        {(showPrevious)?<><Button className='p-2 m-2' variant="danger" onClick={previousWordFunction}>Previous</Button></>:<></>}
        <Button  className='p-2 m-2' variant="success" onClick={nextWordSanskrit}>{startNext}</Button>
        
                <br></br>   
        {(sAnswer)?<><Button className='p-2 m-2' onClick={toggleMeaning}>Show Letter</Button></>:<></>}
        {(sPhonic)?<><h3>{dPhonic}</h3></>:<></>}
        {(sSankrit)?<><h3>{dSankrit}</h3></>:<></>} 
        {(sLetter || showAll)?<><h3>{showLetter}</h3></>:<></>} <br></br>
      
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

export default SanskritDisplayLetter