//diplays basic info
//navigate to the fun zone or professional Info

//header
//picture of me
//educational and technical summary and what I'm looking for
//import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from "../components/navBar"

function NameHeader(){
    return (
        <>
            <div>
                <NavBar />
                <h1>Mitchell Mazzoni</h1>
                <h2>Software Engineer</h2>
            </div>
        </>
    )
}



//    <button onClick={() => {console.log("button pressed!")} }> this button does nothing! </button>
function HomePage(){
    return (
        <div>
            <NameHeader />
        </div>
    )
}




export default HomePage;
