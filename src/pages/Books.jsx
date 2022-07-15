import React, { createContext, useEffect, useState } from 'react';
import {Button, Col,Row} from 'react-bootstrap' 
import bookItems from "../data/BookList.json"
// import cards from '/components/BookList'
import Temp from '../components/BookDisplay'

const bookNumber = 6
const maxPageNumber = Math.floor(bookItems.length /6)
const maxBooks = bookItems.length
const Books = ()=>{
    const [page, setPage] = useState(1)
    const [bookDisplayList, setBookDisplayList] = useState([])
    const [rebel, setRebel] = useState(0)

 const updateList =   () => {
    const maxBookIndex = page*bookNumber
    
    setBookDisplayList([])
    let tempArray =[]
    let bookAdd
    if (maxBookIndex > maxBooks){
         bookAdd = maxBooks - (maxPageNumber*6) 
    }else{
        bookAdd = 6
    }

    if ((page >maxPageNumber) || (page<1)){setRebel(1)}else{setRebel(0)}
    bookItems.map(items => {
                if ((items.id >= (maxBookIndex)) && (items.id < (maxBookIndex +bookAdd)))  {
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



    const minus = ()=>{
        setPage(page-1)
        updateList()

    }
    const plus = ()=>{
        setPage(page+1)
        updateList()

    }

    

    
    return(
        <div className="Books">
            <center><h1 style={{ fontSize: '4em' }}>My Books</h1> 
            <p style={{ fontSize: '2em' }}>Click on the image to see the back</p> 
            <label style={{ fontSize: '1.5em', padding: "10px" }}>Page</label><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={minus} >&lt;</label> <input  style={{width:"50px",height:"50px",fontSize: '2em' }} type="number"   value={page}  onChange={(event) => { setPage(event.target.value) }} /> <Button variant="primary" style={{height:"50px", verticalAlign:"top"}} onClick={updateList}><b>load</b></Button><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={plus} >&gt;</label> <label style={{ fontSize: '1.5em',padding: "10px" }}> Max page = {maxPageNumber}</label></center>
            <br/> 
            { (rebel ==0)? <></>:<center><p>You rebel you :P trying to break my code, lol I put some error correcting code, so please enter page number within the range please :)</p></center>}
            <br/>
            <Row md={2} xs={1} lg={3} className="g-3">
                {bookDisplayList.map(bookItems => (

                    <Col  key={bookItems.id}><Temp imgUrlF={bookItems.imgUrlF} imgUrlB={bookItems.imgUrlB} name={bookItems.name} author={bookItems.author}/></Col>
                ))} 
           </Row>
        </div>
       
        

    );

}

export default Books