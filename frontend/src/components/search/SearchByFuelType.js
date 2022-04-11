import axios from 'axios'
import React, { useState } from 'react'
import { withRouter } from 'react-router';


import { Card } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

function SearchByFuelType() {

    // const [carName, setcarName] = useState("")
    const [fuelType, setfuelType] = useState("")

    // const [toggle, settoggle] = useState(false)
    const [cardetails, setcardetails] = useState([])

    let change=(e)=>{
      setfuelType(e.target.name=e.target.value)
}
async function getdata(){
    let res = await axios.get(`http://localhost:8080/car/data2/${fuelType}`);
     setcardetails(res.data)
  
    //  props.history.push("/searchByfueltype");
    }

  return (
    <div>
<div className='col-4 m-auto mt-4 d-inline-block'>
<input name="ram" type="text" className='form-control ' placeholder="search..." onChange={(e)=>{change(e)}}></input>
</div>
 <button  className='btn btn-success m-2 p-2'   onClick={()=>{ getdata()}}>Search</button>
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
                  fuelType: {val.fuelType}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  powerSteering:  {val.powerSteering} 
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  breakSystem: {val.breakSystem}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  showroom_Price: {val.showroom_Price}
                </ListGroupItem>
                <ListGroupItem>
                  {" "}
                  onroadPrice: {val.onroadPrice}
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

export default SearchByFuelType;