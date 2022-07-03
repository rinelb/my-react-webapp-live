import React from 'react';
import {Col,Row} from 'react-bootstrap' 
import bookItems from "../data/BookList.json"
// import cards from '/components/BookList'
import Temp from '../components/BookDisplay'


const Books = ()=>{

    return(
        <div className="Books">
            
            <Row md={2} xs={1} lg={3} className="g-3">
                {bookItems.map(bookItems => (

                    <Col  key={bookItems.id}><Temp imgUrl={bookItems.imgUrl} /></Col>
                ))} 
           </Row>
        </div>
       
        

    );

}

export default Books