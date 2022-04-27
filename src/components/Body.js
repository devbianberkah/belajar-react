import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


const Body = ({name,jobs}) =>{
    return (
        <div className="body-name">
            <span className="profile-name">{name}</span>
            <br/>
            <span className="profile-jobs">{jobs}</span>
        </div>
    );
};

export default Body;