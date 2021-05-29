import React, { useState } from "react";
const Contact = () => {
    const [data, setData]=useState({
        fullname:'',
        phoneno:'',
        email:'',
        mssg:'',

    });

    const InputEvent=(event)=>{
        const{name, value}=event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    }
    const formSubmit=(e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}.My mobile number is ${data.phoneno} and email is ${data.email}, Here is my message ${data.mssg}`)
    }
    return (
        <><div className="my-5">
            <h1 className="text-center">CONTACT US</h1>
        </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Enter your Name"
                                name="full name"value={data.name} onChange={InputEvent} placeholder="Name"/>
                                <div id="emailHelp" class="form-text"> **We'll never share your details with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="Enter your mobile no"
                                name="phoneno"value={data.phoneno} onChange={InputEvent} placeholder="Enter your mobile no"/>
                                <div id="emailHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                 name="email"value={data.email} onChange={InputEvent} placeholder="Email-Id" />
                                <div id="emailHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                           
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message(if any)</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="mssg"value={data.mssg} onChange={InputEvent}></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>


                    </div>
                </div>
            </div>

        </>
    );
};
export default Contact;