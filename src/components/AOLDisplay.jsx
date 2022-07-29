import { useEffect,useState } from 'react'; 
import Card from "react-bootstrap/Card";
import "../styles.css";

 
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

export const AOLDisplay = (props)=>{
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

    


 
    return (
     <> { (mobile==0)?
        <center><div style={{width: "25em"}}>
            <Card className="BookDisplay"  > 
                <Card.Img 
                    src={props.imgUrlF} 
                    variant="top" 
                   
                    
                    style={{objectFit:"cover"}} />
                <Card.Body>
                    <div>
                      <center> 
                        <h3 style={{ fontSize: '2.5em' }}>{props.name}</h3>
                         
                    </center>
                    </div>
                </Card.Body>
               
      </Card>
            
            



            {/* <img src={props.imgUrl}/>
            <h1>temp</h1> */}
        </div></center>
        :
        <div >
            <Card className="BookDisplay"  > 
                <Card.Img 
                    src={props.imgUrlF} 
                    variant="top" 
                    
                    style={{objectFit:"cover"}} />
                <Card.Body>
                    <div><center> <h3 style={{ fontSize: '2.5em' }}>{props.name}</h3>
                    <p style={{ fontSize: '1.6em' }}>{props.author} {isOpen}</p></center></div>
                </Card.Body>
                
      </Card>
            
            



            {/* <img src={props.imgUrl}/>
            <h1>temp</h1> */}
        </div>
}</>
    )


}

export default AOLDisplay;