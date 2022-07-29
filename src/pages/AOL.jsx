import React, { createContext, useEffect, useState } from 'react';
import {Button, Col,Row, Form,FormControl} from 'react-bootstrap' 
import Table from 'react-bootstrap/Table';
import bookItems from "../data/Knowledge.json"
// import cards from '/components/BookList'
import Temp from '../components/BookDisplay'

const bookNumber = 6
// const maxPageNumber = Math.floor(bookItems.length /6)
// const maxBooks = bookItems.length
const AOL = ()=>{
    const [page, setPage] = useState(1)
    const [bookDisplayList, setBookDisplayList] = useState([])
    const [bookDisplaySearch, setBookDisplaySearch] = useState(bookItems)
    const [rebel, setRebel] = useState(0)
    const [find, setFind] = useState("")
    const [showfind,setShowfind ] = useState(0)
    const [maxBooks,setMaxBooks ] = useState(bookItems.length)
    const [maxPageNumber,setMaxPageNumber ] = useState(Math.floor(bookItems.length /6)+1)


    const [width, setWindowWidth] = useState(0)
    const [mobile, setMobile] = useState(0)
    const mobileWidth = 1000
  
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


 const updateList =   () => {
    
    
    setBookDisplayList([])
    let tempArray =[]
    const bookAdd = 6
    const pageMinBook = (page -1)*bookNumber
    console.log("pageMinBook value is "+pageMinBook)
    // if (maxBookIndex > maxBooks){
    //      bookAdd = maxBooks - (maxPageNumber*6) 
    // }else{
    //     bookAdd = 6
    // }
    let countBook = 0
    
    if ((page >maxPageNumber && maxPageNumber!=0) || (page<1)){setRebel(1)}else{setRebel(0)}
    bookDisplaySearch.map(items => {
                countBook = countBook +1
                if ((countBook>= (pageMinBook)) && (countBook < (pageMinBook +bookAdd)))  {

                    tempArray.push(items)
                }

            }

        )
    setBookDisplayList(tempArray)


    }


    const updateListValue =   (value) => {
    
    
        setBookDisplayList([])
        let tempArray =[]
        const bookAdd = 6
        const pageMinBook = (value -1)*bookNumber
        console.log("pageMinBook value is "+pageMinBook)
        // if (maxBookIndex > maxBooks){
        //      bookAdd = maxBooks - (maxPageNumber*6) 
        // }else{
        //     bookAdd = 6
        // }
        let countBook = 0
        
        if ((value >maxPageNumber && maxPageNumber!=0) || (value<1)){setRebel(1)}else{setRebel(0)}
        bookDisplaySearch.map(items => {
                    countBook = countBook +1
                    if ((countBook>= (pageMinBook)) && (countBook < (pageMinBook +bookAdd)))  {
    
                        tempArray.push(items)
                    }
    
                }
    
            )
        setBookDisplayList(tempArray)
    
    
        }

    const runOnce =() =>{
       
        setPage(1);
        let tempArray =[]
         
         
        bookItems.map(items => {
                    if ((items.id >= 1) && (items.id < 7))  {
                        tempArray.push(items)
                    }
    
                }
    
            )
        setBookDisplayList(tempArray)
    
        } 

        

    useEffect(
       runOnce,
        []
    )
    useEffect(
        updateList,
        [bookDisplaySearch]
    )

    const foundList =(newlist) =>{
       
        setPage(1);
        let tempArray =[]
         
         
        newlist.map(items => {
                    if ((items.id >= 1) && (items.id < 7))  {
                        tempArray.push(items)
                    }
    
                }
    
            )
        setBookDisplayList(tempArray)
    
        } 
   


    const minus = ()=>{
        setPage(page-1)
        updateListValue(page-1) 

    }
    const plus = ()=>{
        setPage(page+1)
        updateListValue(page+1)

    }

    const search=(event)=>{
        event.preventDefault();
        if (find.val.toString() != ""){
        setBookDisplayList([])
        console.log("running search")
        let tempArray =[]
        console.log(find.val.toString())
        bookItems.map(items => {
            let tempStringName = items.name.toString().toLowerCase()
            
            if ((tempStringName.includes(find.val.toString().toLowerCase())) )  {
                tempArray.push(items)
                setShowfind(1)
                console.log("found")
            }

        })
        setBookDisplaySearch(tempArray)
        setMaxPageNumber(Math.floor(tempArray.length /6)+1)
        setMaxBooks(tempArray.length)
        setPage(1)
        foundList(tempArray)
        updateList()
    }else 
    {setShowfind(0)
    setBookDisplaySearch(bookItems)
    setMaxPageNumber(Math.floor(bookItems.length /6)+1)
    }
         


    }


    const handleKeyPressPage  = (target)=> {
        if(target.charCode==13){
            updateList();    
        } 
      }

    const handleKeyPress = (target)=> {
        if(target.charCode==13){
            search(target);    
        } 
      }
    

    
    return(
        <div className="Books">
            <center><h1 style={{ fontSize: '4em' }}>My Books</h1> 
            <p style={{ fontSize: '2em' }}>Click on the image to see the back</p> 
            <label style={{ fontSize: '1.5em', padding: "10px" }}>Page</label><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}}
             onClick={minus} >&lt;</label> <input  style={{width:"50px",height:"50px",fontSize: '2em' }} type="number"   value={page}  onKeyPress={handleKeyPressPage}  
             onChange={(event) => { setPage(event.target.value) }} /> <Button variant="primary" style={{height:"50px", verticalAlign:"top"}} onClick={updateList}><b>load</b></Button>
             <label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={plus} >&gt;</label> 
             <label style={{ fontSize: '1.5em',padding: "10px" }}> Max page = {maxPageNumber}</label></center>
            <br/> 
            { (rebel ==0)? <></>:<center><p>You rebel you :P trying to break my code, lol I put some error correcting code, so please enter page number within the range please :)</p></center>}
             
            <center><Form className="d-flex" style={{width:"26em"}}  onKeyPress={handleKeyPress}>
                    <FormControl className='me-1' type="text"  placeholder="Search" onChange={e => setFind({ val: e.target.value })}/>
                    <Button variant="outline-success" onClick={search}>Search</Button>
            </Form> <br/>
            {(showfind==1)?
            <>
             { (mobile==1) ?<Table striped bordered hover size="sm"  style ={{width: '20em', textAlign: 'left'}}>
            <thead>
                <tr>
                 
                <th>Book Name</th>
                </tr>
            </thead>
            <tbody>
            {bookDisplaySearch.map(bookItems => (
                    <tr>
                    <td>{bookItems.name}</td> 
                    </tr>
            ))}
            </tbody>
            </Table>:
            <Table striped bordered hover size="sm"  style ={{width: '30em', textAlign: 'left'}}>
            <thead>
                <tr>
                 
                <th>Book Name</th>
                </tr>
            </thead>
            <tbody>
            {bookDisplaySearch.map(bookItems => (
                    <tr>
                    <td>{bookItems.name}</td> 
                    </tr>
            ))}
            </tbody>
            </Table>}
            </>:
            <></>}
            </center>
            <br/>
            <Row md={2} xs={1} lg={3} className="g-3 align-items-center"  >
                {bookDisplayList.map(bookItems => (

                    <Col className="text-center text-md-right" key={bookItems.id}><Temp imgUrlF={bookItems.imgUrlF} imgUrlB={bookItems.imgUrlB} name={bookItems.name} /></Col>
                ))} 
           </Row>
           <br/><br/>
           <center><label style={{ fontSize: '1.5em', padding: "10px" }}>Page</label><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={minus} >&lt;</label> <input  style={{width:"50px",height:"50px",fontSize: '2em' }} type="number"   value={page} onKeyPress={handleKeyPressPage}  onChange={(event) => { setPage(event.target.value) }} /> <Button variant="primary" style={{height:"50px", verticalAlign:"top"}} onClick={updateList}><b>load</b></Button><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={plus} >&gt;</label> <label style={{ fontSize: '1.5em',padding: "10px" }}> Max page = {maxPageNumber}</label></center>
        </div>
       
        

    );

}

export default AOL