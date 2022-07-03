import React from 'react'
import Card from "react-bootstrap/Card";

export const BookDisplay = (props)=>{
    const dummy=()=>{
        console.log("u clicked a boook");

    }
 
    return (
        <div>
            <Card className="BookDisplay" onClick={dummy} > 
                <Card.Img 
                    src={props.imgUrl} 
                    variant="top" 
                    height="100%"
                    width="100px"
                    
                    style={{objectFit:"cover"}} />
            </Card>
            {/* <img src={props.imgUrl}/>
            <h1>temp</h1> */}
        </div>
    )


}

export default BookDisplay;