import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Adminlogin from "./components/admin/Adminlogin";
import AdminRegister from "./components/AdminRegister";
import AdminTable from "./components/admin/AdminTable";
import LogoHead from "./components/LogoHead";
import { useState } from "react";
import SuperAdminTable from "./components/admin/SuperAdminTable";
import AddCarDetails from "./components/AddCarDetails";
import SuperAdminCarDetails from "./components/SuperAdminCarDetails";

import SearchByCarName from "./components/search/SearchByCarName";

import SearchByFuelType from "./components/search/SearchByFuelType";
import SearchBycompanyName from "./components/search/SearchByCompanyName";
import EditCarData from "./components/EditCarData";
import Carousell from "./components/Carousell";

function App() {
  const [loginObj, setLoginObj] = useState({
    adminUserName: "",
    adminPassword: "",
  });

  console.log(loginObj, "hiii i am app js");
  return (
    <div className="App">
      <Router>
        {/* <User/> */}
        {/* <NavBar/> */}
        <LogoHead />
        {/* <AdminBootLogin /> */}

        {/* <Route path={'/adminlogin'} component={Adminlogin}/> */}
        <Route
          path={"/adminlogin"}
          render={(props) => {
            return (
              <Adminlogin
                loginObj={loginObj}
                setLoginObj={setLoginObj}
                {...props}
              />
            );
          }}
        />
        <Route exact path={"/"} component={Carousell} />
        <Route path={"/adminregister"} component={AdminRegister} />

        <Route
          path={"/admintable"}
          render={(props) => {
            return <AdminTable loginObj={loginObj} {...props} />;
          }}
        />
        <Route path={"/superadmintable"} component={SuperAdminTable} />
        <Route path={"/addcardetails"} component={AddCarDetails} />
        <Route
          path={"/superadmincardetails"}
          component={SuperAdminCarDetails}
        />

        <Route path={"/searchBycarname"} component={SearchByCarName} />
        <Route path={"/searchBycompanyname"} component={SearchBycompanyName} />
        <Route path={"/searchByfueltype"} component={SearchByFuelType} />
        <Route path={"/editcardata"} component={EditCarData} />
      </Router>
    </div>
  );
}

export default App;
