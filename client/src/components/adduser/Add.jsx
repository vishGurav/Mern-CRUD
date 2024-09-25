import React, { useState } from "react";
import "./add.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";

const Add =()=>{

    const users={
        fname:"",
        lname:"",
        email:"",
        password:""

    }
    const [user ,setUser]=useState(users);
    const navigate=useNavigate();


    const inputHandler =(e)=>{
        const {name,value} =e.target;
         setUser({...user,[name]:value});
         console.log(user);
    }

    const submitForm = async(e)=>
        {
            e.preventDefault();
            await axios.post("http://localhost:8080/create",user)
            .then((res)=>{
                toast.success(res.data.msg,{position:"top-right"})
                navigate("/")

            }).catch(err=>console.log(err))
        
        }
    return(
        <div className="adduser">
            <Link to={"/"}>Back</Link>
            <h3>ADD NEW USER</h3>
            <form className="adduserform" onSubmit={submitForm}>
                <div className="inputgroup">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" onChange={inputHandler} name="fname" autoComplete="off" placeholder="First Name"/>
                </div>
                <div className="inputgroup">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" onChange={inputHandler} name="lname" autoComplete="off" placeholder="Last Name"/>
                </div>
                <div className="inputgroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={inputHandler} name="email" autoComplete="off" placeholder="Email"/>
                </div>
                <div className="inputgroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={inputHandler} name="password" autoComplete="off" placeholder="Password"/>
                </div>
                <div className="inputgroup">
                    <button type="submit">ADD USER</button>
                </div>

            </form>
        </div>
    )
}
export default Add