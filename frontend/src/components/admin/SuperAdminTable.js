import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
// import { useState } from 'react';
import SuperAdminCarDetails from './../SuperAdminCarDetails';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

function SuperAdminTable() {

 const [admins, setadmins] = useState([])
 const [cardetails, setcardetails] = useState([])
 const [toggle, settoggle] = useState(true)

  useEffect( async() => { 
    let token = localStorage.getItem("jwt");

      let jwtToken=`Bearer ${token}`
    let res= await axios.get("http://localhost:8080/car/admins",{headers:{'Authorization': jwtToken} }); 
     console.log(res.data,"hii i am super admin");
    setadmins(res.data);

  }, []);
  
 async function getdata(user){
console.log(user,"user");
let token = localStorage.getItem("jwt");

let jwtToken=`Bearer ${token}`

    let res= await axios.get(`http://localhost:8080/car/admins/${user}`,{headers:{'Authorization': jwtToken} }
    );
    setcardetails(res.data);

  }
  console.log(cardetails,"ans====>");


  return (
    
    <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th className='text-light'>Sl no</th>
      <th> Admin Name</th>
      <th>Admin Contact</th>
      <th>Admin Role</th>
      <th>His Car's details</th>
    </tr>
  </thead>
  <tbody>
   { admins.map((val,ind)=>{
return  <tr key={ind}>
      <td>{ind+1}</td>
      <td>{val.adminUserName}</td>
      <td>{val.adminContact_No}</td>
      <td>{val.role}</td>
      <td><button onClick={()=>{getdata(val.adminUserName)
      settoggle(!toggle)}}> details</button></td>
    </tr>
   


   })}
 
  </tbody>
</Table>

{toggle ? <SuperAdminCarDetails cardetails={cardetails} />:null}

{/* <SuperAdminCarDetails cardetails={cardetails} /> */}
    </div>
  )
}

export default SuperAdminTable