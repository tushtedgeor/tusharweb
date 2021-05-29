
import React from "react";
import web from "../src/images/homeimg1.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home=() => {
    return(
    <>
         <Common name="Talent wins games, Teamwork wins Championships!" imgsrc={web} visit="/service" btname="Get-Started"/>
    </>
    );
};
export default Home;