import  "./CurrentURL.css";
import {Link} from "react-router-dom";
import React from "react";

export const CurrentURL = () => {


    return (
        <>
            <div className="links-nav">
                <Link to="/" className="homelink">Home</Link>
                <Link to="#" className="homelink"><i className="arrow-nav fa-solid fa-caret-right"></i> My Account</Link>
            </div>
        </>
    );
};