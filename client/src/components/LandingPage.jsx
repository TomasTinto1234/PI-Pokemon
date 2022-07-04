import React from "react";
import { Link } from "react-router-dom";


export default function LandingPage(){
    return (
        <div className="landing-page">
          <br/> Welcome to the Pokemon App
            <div >
                <Link to="/Home"><button className="select">Home</button></Link>

            </div>
            </div>
    )
}
