import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const List = () => {
    const [Data, setData] = useState([]);
    const navigate =useNavigate();

    const UserListItem = async () => {
        try {
            const response = await axios.get("/api/fetch/list");
            setData(response.data.UserList); 
            console.log(response.data.UserList);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        UserListItem();
    }, []);

    const HandleUpdate=async(id)=>{
        navigate(`/update/${id}`)
    }

    const HandleDelete=async(id)=>{
      try {
        const DeletedUser= await axios.delete(`/api/deleteuser/delete/${id}`);
        setData((prevData) => prevData.filter(item => item._id !== id));
        console.log('User deleted successfully', DeletedUser.data);

        
    } catch (error) {
          console.log("Errir In Deleting");
        
      }

    }



    return (
        <>
            <div className="container">
                <h2 className='m-auto'>List of Users</h2>
                <table className="mt-3 table border-stripe">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((item) => (
                            <tr key={item._id}> 
                                <td>{item._id}</td>
                                <td>{item.UserName}</td>
                                <td>{item.UserEmail}</td>
                                <td>{item.UserPassword}</td>
                                <td><button onClick={()=>HandleUpdate(item._id)}>Update</button></td>
                                <td><button onClick={()=>HandleDelete(item._id)}>DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default List;
