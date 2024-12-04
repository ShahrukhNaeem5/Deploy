import axios from 'axios';
import React, { useState } from 'react'

const Home = () => {
    const [Data,setData]=useState(
        {
            UserName:"",
            UserEmail:"",
            UserPassword:""
    }
    )

    const Handle_Change=(e)=>{
        const {name,value}=e.target;
        setData((prev)=>(
            {
                ...prev,
                [name]:value,
            }
        ))
    }

    const Handle_Submit = (e) => {
        e.preventDefault();
    
        const { UserName, UserEmail, UserPassword } = Data;
    
        axios.post("https://deploy-production-bcbd.up.railway.app/api/user/", {
            UserName: UserName,
            UserEmail: UserEmail,
            UserPassword: UserPassword,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log("Success:", response.data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
        console.log({ UserName, UserEmail, UserPassword });
    };
    
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