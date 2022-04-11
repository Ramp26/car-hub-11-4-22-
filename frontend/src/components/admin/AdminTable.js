import React, { useEffect, useState } from "react";
import { Alert, Table,Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import AddCarDetails from "./../AddCarDetails";
import EditCarData from "../EditCarData";
function AdminTable(props) {
  const [arr, setArr] = useState([
    {
      carId: "",
      carName: "",
      companyName: "",
      fuelType: "",
      powerSteering: "",
      breakSystem: "",
      showroom_Price: "",
      onroadPrice: "",
      imageURL: "",
      mileage: "",
      seatingCapacity: "",
      engineCapacity: "",
      gearType: "",
      adminUserName: "",
    },
  ]);
  const [showAdd, setshowAdd] = useState(false);
  const [showedit, setshowedit] = useState(false);
  const [selectedData, setselectedData] = useState();

  useEffect(async () => {
    let token = localStorage.getItem("jwt");

    let jwtToken=`Bearer ${token}`
    //converting and getting username from jwt token
    let userData = JSON.parse(atob(token.split(".")[1]));
    let adminUserName = userData.sub;

    console.log(jwtToken);

    // console.log("hii i am admin table", props.loginObj.adminUserName);
    // let res= await axios.get(`http://localhost:8080/car/admins/${props.loginObj.adminUserName}`);
    let res = await axios.get(`http://localhost:8080/car/admins/${adminUserName}`,
     {
      headers:{"Authorization": jwtToken} 
    } 
    );


    setArr(res.data);
    console.log(arr, "i am res");
  }, []);

  // console.log(props.loginObj);

  let showAddModal = () => {
    setshowAdd(false);
    // props.history.push("/addcardetails");
  };

  let hideEdit = () => {
    setshowedit(false);
  };


 let updateData=(val)=>{
   console.log("update================")
   setshowedit(true);
    setselectedData(val)
    
  }

  async function deleteData(carId) {
    try {
        let token = localStorage.getItem("jwt");

    let jwtToken=`Bearer ${token}`
      let res = await axios.delete(`http://localhost:8080/car/remove/${carId}`,{headers:{'Authorization': jwtToken} }
      );
      alert("deleted successfully");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-end">
        <Button
          style={{ margin: "20px" }}
          onClick={() => {
            setshowAdd(true);
          }}
        >
          Add Data
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Car Id</th>
            <th>Car Name</th>
            <th>Company</th>
            <th>Fuel type</th>
            <th>Power steering</th>
            <th>Break System</th>
            <th>Showroom Price</th>
            <th>Onroad price</th>
            <th>Image</th>
            <th>Mileage</th>
            <th>Seating Capacity</th>
            <th>Engine Capacity</th>
          <th> Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((val, indx) => {
             console.log(val)
            return (
              <tr key={indx+1}>
                {/* <td>{index+1}</td> */}
                <td>{val.carId}</td>
                <td>{val.carName}</td>
                <td>{val.companyName}</td>
                <td>{val.fuelType}</td>
                {val.powerSteering?<td>true</td>: <td>false</td>}
                <td>{val.breakSystem}</td>
                <td>{val.showroom_Price}</td>
                <td>{val.onroadPrice}</td>
                <td><Image width="150px"  height="100" src={val.imageURL} /></td>
                <td>{val.mileage}</td>
                <td>{val.seatingCapacity}</td>
                <td>{val.engineCapacity}</td>
                <td> {val.adminUserName}</td>
                <td>
                  <Button
                    style={{
                      margin: "2px",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                    }}
                    variant="success"
                    onClick={()=>{updateData(val)}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      deleteData(val.carId);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddCarDetails showAdd={showAdd} setshowAdd={setshowAdd} />
      <EditCarData showedit={showedit} setshowedit={setshowedit} selectedData={selectedData && selectedData } />
    </div>
  );
}

export default AdminTable;
