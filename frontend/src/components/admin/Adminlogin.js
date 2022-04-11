import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useHistory,withRouter } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminTable from "./AdminTable";


function Adminlogin(props) {
    const history=useHistory
  const [loginArr, setLoginArr] = useState( []);
  
//   const [loginObj, setLoginObj] = props
let loginObj = props.loginObj
let setLoginObj = props.setLoginObj
  console.log(props);
//   const [loginObj, setLoginObj] = useState({
//     adminUserName: "",
//     adminPassword: "",
//   });
  const [superUserError, setsuperUserError] = useState("");
  const [isUserValid, setisUserValid] = useState(false);
  const [superPasswordError, setsuperPasswordError] = useState("");
  const [isPasswordValid, setisPasswordValid] = useState(false);


  console.log("SuperObj ->", loginArr);
  const handleChange = (e) => {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleLogin = async () => {
    const isUserNameValid = validateUserName(loginObj.adminUserName);
    const isPassValid = validatePassword(loginObj.adminPassword);
    if (isPassValid === true && isUserNameValid === true) {
      setLoginArr([...loginArr, loginObj]);

      console.log("loginArr",loginArr);
      let res = await axios.post("http://localhost:8080/admin/login",loginObj);
      
      localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
      localStorage.setItem("adminRole",JSON.stringify(res.data.adminRole) )

      let role=localStorage.getItem("adminRole");
      let roledata=JSON.parse(role)
      console.log(roledata[0].authority,"hiiioioi");
      if(roledata[0].authority=="ROLE_ADMIN"){
      props.history.push("/admintable");
      alert("login successfull");
      }else if(roledata[0].authority=="ROLE_SUPERADMIN"){
        props.history.push("/superadmintable");
        alert("login successfull");
      }
      setLoginObj({
        adminUserName: "",
        adminPassword: "",
      });
     
    } else {
      alert("give valid data");
    }

    // if(10>9){
    // props.history.push('/superlogin')
    //}
  };

  //userName validation
  const validateUserName = (name) => {
    if (name !== "") {
      let lName = /^[a-zA-Z]+$/;
      if (name.match(lName)) {
        setisUserValid(true);
        setsuperUserError("");
        console.log(superUserError);
        return true;
      } else {
        setisUserValid(false);
        setsuperUserError("*Please enter valid username");
        console.log(superUserError);
        return false;
      }
    } else {
      setisUserValid(false);
      setsuperUserError("*Please enter your user name");
      console.log(superUserError);
      return false;
    }
  };

  //password verification
  const validatePassword = (password) => {
    if (password) {
      let pass = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$^&*]).{6,20}$/;
      if (password.match(pass)) {
        setisPasswordValid(false);
        setsuperPasswordError("*Please enter valid password");
        return false;
      } else {
        setisPasswordValid(true);
        setsuperPasswordError("");
        return true;
      }
    } else {
      setisPasswordValid(false);
      setsuperPasswordError("*Please enter your passowrd");
      return false;
    }
  };

  return (
    <div>
      <Router>
        <Card style={{ width: "28rem", margin: "auto", marginTop: "80px", boxShadow:'15px 15px #696969',  }} >
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Login</Card.Title>

            <Form.Control
              className="mt-2"
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Enter your User Name"
              name={"adminUserName"}
              value={loginObj.adminUserName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {!isUserValid ? (
              <span
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              >
                {superUserError}
              </span>
            ) : null}

            <Form.Control
              className="mt-4"
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Enter your Password"
              name={"adminPassword"}
              value={loginObj.adminPassword}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {!isPasswordValid ? (
              <span
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              >
                {superPasswordError}
              </span>
            ) : null}

            <div className="text-center">
              <Button onClick={handleLogin} variant="primary" className="m-2">
                Login
              </Button>
              <hr />
              <Button
              className='mb-2'
                variant="light"
                onClick={() => {
                  props.history.push("/adminregister");
                }}
              >
                If not Registered Please Register
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Route path="/admintable" render={(props)=>{
            return <AdminTable loginObj={loginObj.adminUserName} {...props}/>
        }} />
      </Router>
    </div>
  );
}

export default withRouter(Adminlogin);
