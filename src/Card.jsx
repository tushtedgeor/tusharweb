import React from "react"
import { NavLink } from "react-router-dom";
import cric from "../src/images/footballimage.jpg"

const Card = (props) => {
    console.log(props);
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card shadow">
                <div className="inner">
                <img src={props.imgsrc}className="card-img-top" alt="" />
                </div>
                    <div className="card-body text center">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <NavLink to="/contact" className="btn btn-primary">Order</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Card;