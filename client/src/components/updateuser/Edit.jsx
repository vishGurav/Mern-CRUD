import React, { useEffect, useState } from "react";
import "../adduser/add.css"
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Edit =()=>{
    const users={
        fname:"",
        lname:"",
        email:"",
        password:""
    }
    const {id}=useParams();
    const [user,setUser]=useState(users);

    const inputchangehandler =(e)=>{
        const {name,value} =e.target;
        setUser({...user,[name]:value})
        console.log(user);

    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/${id}`)
        .then((res)=>{            
            setUser(res.data)
            console.log(res.data);
         }).catch((err)=>{
                console.log(err);
        })

    },[id])
    return(
        <div className="adduser">
            <Link to={"/"}>Back</Link>
            <h3>UPDATE USER</h3>
            <form className="adduserform">
                <div className="inputgroup">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname"  onChange={inputchangehandler} name="fname" autoComplete="off" placeholder="First Name"/>
                </div>
                <div className="inputgroup">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" onChange={inputchangehandler} value={user.lname || ''}  name="lname" autoComplete="off" placeholder="Last Name"/>
                </div>
                <div className="inputgroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={user.email || ''} onChange={inputchangehandler} name="email" autoComplete="off" placeholder="Email"/>
                </div>
                
                
                <div className="inputgroup">
                    <button type="submit">UPDATE USER</button>
                </div>

            </form>
        </div>
    )
}
export default Edit