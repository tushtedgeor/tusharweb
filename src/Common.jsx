import React from "react";
import web from "../src/images/Aboutimg1.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Common=(props) => {
    return(
    <>
        <section id="header" className="d-flex align-right">
        <div classroom="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center fl">
                   <div className="row">
                       <h1>
                        {props.name} <strong className="brand-name"> TushWeb!</strong>
                       </h1>
                       <h2 className="mt-4">
                       
                       </h2>
                       <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                       </div>
                       <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center fl">
                           <img src={props.imgsrc} className="img-fluid animated" alt="aboutimg"/>
                       </div>
                       </div>
                   </div>                  
                </div>
                </div>
            </div>
        </section>
    </>
    );
};
export default Common;