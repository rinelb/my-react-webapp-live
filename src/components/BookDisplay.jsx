import { useEffect,useState } from 'react'; 
import Card from "react-bootstrap/Card";
import "../styles.css";

 
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

export const BookDisplay = (props)=>{
    const [isOpen,setIsOpen] = useState(false);

    
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

    
    const dummy=()=>{
        console.log("u clicked a boook");

    }

    

  const handleShowDialog = () => {
    setIsOpen(v => !v );
    console.log("cliked "+props.name+" "+isOpen);
  };
 
    return (
     <> { (mobile==0)?
        <div style={{width: "30em"}}>
            <Card className="BookDisplay"  > 
                <Card.Img 
                    src={props.imgUrlF} 
                    variant="top" 
                   
                    onClick={handleShowDialog}
                    style={{objectFit:"cover"}} />
                <Card.Body>
                    <div><center> <h3 style={{ fontSize: '2.5em' }}>{props.name}</h3>
                    <p style={{ fontSize: '1.6em' }}>{props.author} {isOpen}</p></center></div>
                </Card.Body>
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
      </Card>
            
            



            {/* <img src={props.imgUrl}/>
            <h1>temp</h1> */}
        </div>
        :
        <div >
            <Card className="BookDisplay"  > 
                <Card.Img 
                    src={props.imgUrlF} 
                    variant="top" 
                   
                    onClick={handleShowDialog}
                    style={{objectFit:"cover"}} />
                <Card.Body>
                    <div><center> <h3 style={{ fontSize: '2.5em' }}>{props.name}</h3>
                    <p style={{ fontSize: '1.6em' }}>{props.author} {isOpen}</p></center></div>
                </Card.Body>
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
      </Card>
            
            



            {/* <img src={props.imgUrl}/>
            <h1>temp</h1> */}
        </div>
}</>
    )


}

export default BookDisplay;