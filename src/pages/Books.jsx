import React from 'react';
import {Col,Row} from 'react-bootstrap' 
import bookItems from "../data/BookList.json"
// import cards from '/components/BookList'
import Temp from '../components/BookDisplay'


const Books = ()=>{

    return(
        <div className="Books">
            <center><h1>My Books</h1></center>
            <Row md={2} xs={1} lg={3} className="g-3">
                {bookItems.map(bookItems => (

                    <Col  key={bookItems.id}><Temp imgUrlF={bookItems.imgUrlF} imgUrlB={bookItems.imgUrlB} name={bookItems.name} author={bookItems.author}/></Col>
                ))} 
           </Row>
        </div>
       
        

    );

}

export default Books