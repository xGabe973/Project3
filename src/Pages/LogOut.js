import React from "react";
import firebase from "../firebase"
import { Button, Icon } from "antd";



const logOutUser = () => {
    firebase.auth().signOut();
};

// const LogOut = () => {
//     return <button className="outbutton"  onClick={logOutUser} children="Log Out" />
// };

const LogOut = () => {
    return (
      <Button className="outbutton" type="primary" onClick={logOutUser}>
        <Icon type="logout" style={{ verticalAlign: "0.125em" }} />
        Logout
      </Button>
    );
   };
   
export default LogOut;