import axios from 'axios'
import React, { useState } from 'react'

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function SearchByCarName() {

    // const [carName, setcarName] = useState("")
    const [carName, setcarName] = useState("")

    // const [toggle, settoggle] = useState(false)
    const [cardetails, setcardetails] = useState([])

    let change=(e)=>{
      setcarName(e.target.value)
}
async function getdata(){
    let res = await axios.get(`http://localhost:8080/car/data/${carName}`);
    console.log(res.data);



    setcardetails([res.data]);
   
    // props.history.push("/searchBycarname");

    }


  return (
    <div>
<div className='col-4 m-auto mt-4 d-inline-block'>
<input name="ram" type="text" className='form-control ' placeholder="search..." onChange={(e)=>{change(e)}}></input>
</div>
 <button className='btn btn-success m-2 p-2' onClick={()=>{ getdata()}}>Search</button>
 
 {/* {toggle ? <Showcar cardetails={cardetails} />:null} */}
 
 <div>
        {cardetails.map((val) => {
          return (
            <Card
              style={{
                width: "20rem",
                display: "inline-block",
                margin: "20px",
                boxShadow:'15px 15px #696969',
              }}
            >
              <Card.Img variant="top" src={val.imageURL} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Title>{val.carName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                {/* <ListGroupItem>  carName: "",</ListGroupItem> */}
                <ListGroupItem>
                  {" "}
                  BodycompanyName:  {val.BodycompanyName}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  fuelT{val.fuelType}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  powerSteer {val.powerSteering} 
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  breakSy {val.breakSystem}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  showroom_P {val.showroom_Price}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  onroadPr{val.onroadPrice}
                </ListGroupItem>
                {/* <ListGroupItem>     imageURL: "",</ListGroupItem> */}
                <ListGroupItem>
                  {" "}
                  Mileage: {val.Mileage}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  seatingCapacity: {val.seatingCapacity}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  engineCapacity: {val.engineCapacity}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  gearType: {val.gearType}{" "}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  adminUserName:{val.adminUserName}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
</div>
    
  )
}

export default SearchByCarName ;