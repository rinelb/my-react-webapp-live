import React, { createContext, useEffect, useState } from 'react';
import {Button, Col,Row, Form,FormControl} from 'react-bootstrap' 
import Table from 'react-bootstrap/Table';
import bookItems from "../data/BookList.json"
// import cards from '/components/BookList'
import Temp from '../components/BookDisplay'

const bookNumber = 6
// const maxPageNumber = Math.floor(bookItems.length /6)
// const maxBooks = bookItems.length
const Books = ()=>{
    const [page, setPage] = useState(1)
    const [bookDisplayList, setBookDisplayList] = useState([])
    const [bookDisplaySearch, setBookDisplaySearch] = useState(bookItems)
    const [rebel, setRebel] = useState(0)
    const [find, setFind] = useState("")
    const [showfind,setShowfind ] = useState(0)
    const [maxBooks,setMaxBooks ] = useState(bookItems.length)
    const [maxPageNumber,setMaxPageNumber ] = useState(Math.floor(bookItems.length /6))


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
        [bookDisplaySearch,page]
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
         

    }
    const plus = ()=>{
        setPage(page+1)
         

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
            let tempStringAuthur = items.author.toString().toLowerCase()
            
            if ((tempStringName.includes(find.val.toString().toLowerCase())) || (tempStringAuthur.includes(find.val.toString().toLowerCase())))  {
                tempArray.push(items)
                setShowfind(1)
                console.log("found")
            }

        })
        setBookDisplaySearch(tempArray)
        setMaxPageNumber(Math.floor(tempArray.length /6))
        setMaxBooks(tempArray.length)
        setPage(1)
        foundList(tempArray)
        updateList()
    }else 
    {setShowfind(0)}
         


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
            <label style={{ fontSize: '1.5em', padding: "10px" }}>Page</label><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={minus} >&lt;</label> <input  style={{width:"50px",height:"50px",fontSize: '2em' }} type="number"   value={page}  onChange={(event) => { setPage(event.target.value) }} /> <Button variant="primary" style={{height:"50px", verticalAlign:"top"}} onClick={updateList}><b>load</b></Button><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={plus} >&gt;</label> <label style={{ fontSize: '1.5em',padding: "10px" }}> Max page = {maxPageNumber}</label></center>
            <br/> 
            { (rebel ==0)? <></>:<center><p>You rebel you :P trying to break my code, lol I put some error correcting code, so please enter page number within the range please :)</p></center>}
            <br/>
            <center><Form className="d-flex" style={{width:"20em"}}  onKeyPress={handleKeyPress}>
                    <FormControl className='me-1' type="text"  placeholder="Search" onChange={e => setFind({ val: e.target.value })}/>
                    <Button variant="outline-success" onClick={search}>Search</Button>
            </Form> 
            {(showfind==1)?
            <>
             <Table striped bordered hover size="sm"  style ={{width: '30em', textAlign: 'left'}}>
            <thead>
                <tr>
                 
                <th>Book Name</th>
                <th>Authur</th> 
                </tr>
            </thead>
            <tbody>
            {bookDisplaySearch.map(bookItems => (
                    <tr>
                    <td>{bookItems.name}</td> <td>{bookItems.author}</td>
                    </tr>
            ))}
            </tbody>
            </Table>
            </>:
            <></>}
            </center>
            <br/>
            <Row md={2} xs={1} lg={3} className="g-3">
                {bookDisplayList.map(bookItems => (

                    <Col  key={bookItems.id}><Temp imgUrlF={bookItems.imgUrlF} imgUrlB={bookItems.imgUrlB} name={bookItems.name} author={bookItems.author}/></Col>
                ))} 
           </Row>
           <br/><br/>
           <center><label style={{ fontSize: '1.5em', padding: "10px" }}>Page</label><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={minus} >&lt;</label> <input  style={{width:"50px",height:"50px",fontSize: '2em' }} type="number"   value={page}  onChange={(event) => { setPage(event.target.value) }} /> <Button variant="primary" style={{height:"50px", verticalAlign:"top"}} onClick={updateList}><b>load</b></Button><label style={{ fontSize: '1.5em', padding: "10px" ,color:"blue"}} onClick={plus} >&gt;</label> <label style={{ fontSize: '1.5em',padding: "10px" }}> Max page = {maxPageNumber}</label></center>
        </div>
       
        

    );

}

export default Books