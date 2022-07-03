import React from 'react'
import {useState} from 'react'
import Card from "react-bootstrap/Card";
import "../styles.css";

 
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

export const BookDisplay = (props)=>{
    const [isOpen,setIsOpen] = useState(false);
    
    const dummy=()=>{
        console.log("u clicked a boook");

    }

    

  const handleShowDialog = () => {
    setIsOpen(v => !v );
    console.log("cliked "+props.name+" "+isOpen);
  };
 
    return (
        <div>
            <Card className="BookDisplay" onClick={handleShowDialog} > 
                <Card.Img 
                    src={props.imgUrlF} 
                    variant="top" 
                    height="100%"
                    width="100px"
                    
                    style={{objectFit:"cover"}} />
                <Card.Body>
                    <div><center> <h3>{props.name}</h3>
                    <p>Author: {props.author} {isOpen}</p></center></div>
                </Card.Body>
            </Card>
            
            {{isOpen} && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open={isOpen}
            // onClick={handleShowDialog}
          >
            <img
              className="image"
              src={props.imgUrlB}
              onClick={handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}



            {/* <img src={props.imgUrl}/>
            <h1>temp</h1> */}
        </div>
    )


}

export default BookDisplay;