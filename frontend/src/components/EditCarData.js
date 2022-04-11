import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";

function EditCarData(props) {
  console.log(props.showAdd,"=====prop")
  const [singleData, setsingleData] = useState({
    carId:"",
    carName: "",
    companyName: "",
    fuelType: "",
    powerSteering: "",
    breakSystem: "",
    showroom_Price: "",
   
    imageURL: "",
    mileage: "",
    seatingCapacity: "",
    engineCapacity: "",
    gearType: "",
    adminUserName: "",
  });


   useEffect(() => {
      
    setsingleData(props.selectedData);


   }, [props.selectedData])
   



  console.log('singleData',singleData);
  
  let addBooking = (e) => {
    setsingleData({
      ...singleData,
      [e.target.name]: e.target.value,
    });
  };

  let saveData = async () => {
    try {
      let token = localStorage.getItem("jwt");

      let jwtToken=`Bearer ${token}`

      let res = await axios.put(`http://localhost:8080/car/edit/${singleData.carId}`,singleData,{headers:{'Authorization': jwtToken}});
      if (res.data.error) {
        alert("something went wrong");
      } else {
        alert("updates successfull");
        // props.showhidemodal();
        props.setshowedit(false)
        setsingleData({
          carId:"",
          carName: "",
          companyName: "",
          fuelType: "",
          powerSteering: "",
          breakSystem: "",
          showroom_Price: "",
          onroadPrice: "",
          imageURL: "",
          Mileage: "",
          seatingCapacity: "",
          engineCapacity: "",
          gearType: "",
          adminUserName: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        show={props.showedit}
        showhidemodal={props.hideEdit}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={()=>{props.setshowedit(false)}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Update Car Details</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  placeholder="Car Name"
                  name="carName"
                  value={singleData?.carName}
                  onChange={addBooking}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Company Name?"
                  name="companyName"
                  value={singleData?.companyName}
                  onChange={addBooking}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  placeholder="Fuel Type"
                  name="fuelType"
                  value={singleData?.fuelType}
                  onChange={addBooking}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Power Steering (TRUE or FALSE)"
                  name="powerSteering"
                  value={singleData?.powerSteering}
                  onChange={addBooking}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  placeholder="Breake System"
                  name="breakSystem"
                  value={singleData?.breakSystem}
                  onChange={addBooking}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="Mileage"
                  name="mileage"
                  value={singleData?.mileage}
                  onChange={addBooking}
                />
              </Col>
            </Row>
            <br />
            <Row>
            <Col>
                <Form.Control
                  placeholder="GearType"
                  name="gearType"
                  value={singleData?.gearType}
                  onChange={addBooking}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="Showroom Price"
                  name="showroom_Price"
                  value={singleData?.showroom_Price}
                  onChange={addBooking}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  placeholder="Seat Capacity"
                  name="seatingCapacity"
                  value={singleData?.seatingCapacity}
                  onChange={addBooking}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="Engine Cc"
                  name="engineCapacity"
                  value={singleData?.engineCapacity}
                  onChange={addBooking}
                />
              </Col>
            </Row>
            <br />
            <Row>
            <Col>
                <Form.Control
                  placeholder="Enter UserName"
                  name="adminUserName"
                  value={singleData?.adminUserName}
                  onChange={addBooking}
                />
              </Col>
            
             <Col>
                <Form.Control
                  placeholder="Enter Image"
                  name="imageURL"
                  value={singleData?.imageURL}
                  onChange={addBooking}
                />
              </Col>
            </Row>
            <br />
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={saveData}>Submit</Button>
          <Button onClick={()=>{props.setshowedit(false)}}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditCarData;
