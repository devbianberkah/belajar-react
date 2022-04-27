import React from "react";
import '../App.css';

function MyHeader({logo}){
    return (
        <header>
            <nav className="nav-header">
                <div className="nav">
                    <img className="logo-image" src={logo}/>
                    <h1>React JS</h1>
                </div>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}

export default MyHeader