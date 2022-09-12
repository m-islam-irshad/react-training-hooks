import axios from "axios";
import React, {useEffect, useState} from "react";

const URL = 'https://jsonplaceholder.typicode.com/users';

const Exercise = ()=>{
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        const fetchUsers = async ()=>{
            const { data } = await axios.get(URL);

            setUsers(data);
        };

    }, []);


    const renderedUsers = users.map((user)=>{
        return <li key={user.id}>{user.name}</li>
    })




}


export default Exercise;