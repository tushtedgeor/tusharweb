import React from "react";
import web from "../src/images/Aboutimg1.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Card from "./Card"
import Common from "./Common";
import pic from "../src/images/myself.jpeg";

const About=() => {
    return(
    <>
        <Common name="We are a team of sports enthusiasts looking forward to meet your indispensable requirements " imgsrc={web} visit="/contact" btname="Contact Now"/>
        <div className="intro text-center">
            <p>TUSHAR SRIVASTAVA</p>
            <p>I am an entrepreneur and a MERN stack developer with a deep enthusiasm for sports and technology</p>
        </div>
    </>
    );
};
export default About;