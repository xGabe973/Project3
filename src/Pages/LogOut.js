import React from "react";
import firebase from "../firebase"



const logOutUser = () => {
    firebase.auth().signOut();
};

const LogOut = () => {
    return <button className="outbutton"  onClick={logOutUser} children="Log Out" />
};

export default LogOut;