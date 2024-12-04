import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Home = () => {


    const [Data,setData]=useState({
        UserName:"",
        UserEmail:"",
        UserPassword:""
    })
    const {id}=useParams();


    const Handle_Change=(e)=>{
        const {name,value}=e.target
        setData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const Handle_Submit=async(e)=>{
        e.preventDefault();

        const {Username,UserEmail,UserPassword}=Data;

        if(id){
            // const response=await axios.put(`http://localhost:4000/api/updatelist/update/${id}`,Data,{
                const response=await axios.put(`https://deploy-production-bcbd.up.railway.app/api/updatelist/update/${id}`,Data,{
                 header:{
                     'content-type':'application/json'
                 }
                 
                })
                
                console.log("Data Updated")
        }else{
            console.log("no id Found")
        }

    }

    
    
    return (
        <>
            <div className="container">
                <form onSubmit={Handle_Submit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">User Name</label>
                        <input onChange={Handle_Change} name='UserName' type="text" class="form-control"  aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={Handle_Change} name='UserEmail' type="email" class="form-control" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={Handle_Change} name='UserPassword' type="password" class="form-control" />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Home