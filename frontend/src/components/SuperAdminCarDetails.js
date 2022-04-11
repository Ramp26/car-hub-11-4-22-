import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function SuperAdminCarDetails(props) {
  const [getcar, setgetcar] = useState([]);

  useEffect(() => {
    setgetcar(
        props.cardetails
    );
  }, [props.cardetails]);

  console.log("getcar======>carrrrrr===>", getcar);
    console.log("props.cardetails====>",props.cardetails);

  return <div>
  <div>
      {getcar.map((val) => {
        return (
          <Card style={{ width: "18rem" ,display:"inline-block" ,margin:"20px"}}>
            <Card.Img variant="top" src={val.imageURL} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Title>{val.carName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
               {/* <ListGroupItem>  carName: "",</ListGroupItem> */}
              <ListGroupItem>
                {" "}   
                BodycompanyName: <h6> {val.BodycompanyName}</h6>
              </ListGroupItem>
              <ListGroupItem> fuelType: <h6>{val.fuelType}</h6></ListGroupItem>
              <ListGroupItem>
                {" "}
                powerSteering: <h6> {val.powerSteering}{" "}</h6>
              </ListGroupItem>
              <ListGroupItem> breakSystem:<h6> {val.breakSystem}</h6></ListGroupItem>
              <ListGroupItem>
                {" "}
                showroom_Price:<h6> {val.showroom_Price}</h6>
              </ListGroupItem>
              <ListGroupItem> onroadPrice: <h6>{val.onroadPrice}</h6></ListGroupItem>
              {/* <ListGroupItem>     imageURL: "",</ListGroupItem> */}
              <ListGroupItem> Mileage: <h6>{val.Mileage}</h6></ListGroupItem>
              <ListGroupItem>
                {" "}
                seatingCapacity: <h6>{val.seatingCapacity}</h6>
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                engineCapacity: <h6>{val.engineCapacity}</h6>
              </ListGroupItem>
              <ListGroupItem> gearType: <h6>{val.gearType}</h6> </ListGroupItem>
              <ListGroupItem> adminUserName:<h6>{val.adminUserName}</h6></ListGroupItem>
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
}

export default SuperAdminCarDetails;
