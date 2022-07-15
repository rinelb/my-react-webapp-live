import React, { createContext, useEffect, useState } from 'react';
import {Col,Row} from 'react-bootstrap' 
import bookItems from "../data/BookList.json"
// import cards from '/components/BookList'
import Temp from '../components/BookDisplay'

const bookNumber = 6
const Books = ()=>{
    const [page, setPage] = useState(1)
    const [bookDisplayList, setBookDisplayList] = useState([])

 const updateList =   (event) => {
    const currentPage = event.target.value*6 
    setPage(currentPage) 
    setBookDisplayList([])
    let tempArray =[]
    bookItems.map(items => {
                if ((items.id >= (currentPage-6)) && (items.id < currentPage))  {
                    tempArray.push(items)
                }

            }

        )
    setBookDisplayList(tempArray)


    }


    
    return(
        <div className="Books">
            <center><h1 style={{ fontSize: '7em' }}>My Books</h1> 
            <p style={{ fontSize: '2.5em' }}>Click on the image to see the back</p></center>
            <label> : min </label><input  style={{width:"50px"}} type="number"   value={page}  onChange={updateList}/> 
            <Row md={2} xs={1} lg={3} className="g-3">
                {bookDisplayList.map(bookItems => (

                    <Col  key={bookItems.id}><Temp imgUrlF={bookItems.imgUrlF} imgUrlB={bookItems.imgUrlB} name={bookItems.name} author={bookItems.author}/></Col>
                ))} 
           </Row>
        </div>
       
        

    );

}

export default Books