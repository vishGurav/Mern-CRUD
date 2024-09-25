import React, { useEffect, useState } from "react";
import "./user.css"
import { Link } from "react-router-dom";
import axios from "axios"
import tost from "react-hot-toast"

const User =()=>{
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{

        const fetchData =async()=>{

           const res= await axios.get("http://localhost:8080/users")
           console.log(res.data);
           setUsers(res.data)
           

        }
        fetchData();

    },[])

   const deleteuser= async(userid)=>{
        await axios.delete(`http://localhost:8080/user/${userid}`)
        .then((res)=>{
            // console.log(res);
            setUsers((prevuser)=>prevuser.filter((user)=> user._id !==userid))
            console.log(res);
            tost.success(res.data.msg,{position:"top-right"})

        }).catch((err)=>{
            console.log(err);
        })
   }
    

    return(
        
        <div className="table">
           
            <Link to={"/add"} className="addbutton">Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>User name</th>
                        <th>User email</th>
                        <th >action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((users,index)=>{
                            return(
                            <tr key={users._id}>
                                <td>{index+1}</td>
                                <td>{users.fname} {users.lname}</td>
                                <td>{users.email}</td>
                                <td className="actionbutton">
                                    <button onClick={()=>deleteuser(users._id)}><i className="fa-solid fa-trash"></i></button>
                                    <Link to={`/edit/`+users._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                            </tr>
                            )

                        })
                    }
                    
                </tbody>
            </table>
        </div>
        
    )
}
export default User