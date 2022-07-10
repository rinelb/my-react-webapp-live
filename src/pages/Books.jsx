import React from 'react';
import {Col,Row} from 'react-bootstrap' 
import bookItems from "../data/BookList.json"
// import cards from '/components/BookList'
import Temp from '../components/BookDisplay'


const Books = ()=>{

    return(
        <div className="Books">
            <center><h1 style={{ fontSize: '7em' }}>My Books</h1> 
            <p style={{ fontSize: '2.5em' }}>Click on the image to see the back</p></center>
            <Row md={2} xs={1} lg={3} className="g-3">
                {bookItems.map(bookItems => (

                    <Col  key={bookItems.id}><Temp imgUrlF={bookItems.imgUrlF} imgUrlB={bookItems.imgUrlB} name={bookItems.name} author={bookItems.author}/></Col>
                ))} 
           </Row>
        </div>
       
        

    );

}

export default Books