import React from "react";
import firebase from "../firebase"

const logOutUser = () => {
    firebase.auth().signOut();
};

const LogOut = () => {
    return <button onClick={logOutUser} children="Log Out" />
};

//return <button type="submit" class="btn btn-primary" onClick={logOutUser} children="Log Out">Log Out</button>

export default LogOut;