import React, { useEffect, useState } from 'react'
import axios from "axios";

const SavedUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('/api/users')
        .then((users) => {
            setUsers(users.data)
        })
    })

    return(
        <div>
            {users.map(data => {
                return( 
                <div style={{border: '1px solid black', marginBottom: '10px', marginRight: '1px'}}>
                 <img src={data.img}/>
                 <h1>{data.name}</h1>
                 <p>{data.username}</p>
                 <p>{data.bio}</p>
                 <p>{data.github_url}</p>
                 <p>{data.portfolio_url}</p>
                 <button style={{position: 'absolute', top: 0, right: 0,border: '1px solid brown'}}>Save User</button>
               </div>
                )
            })}
        </div>
    )
}

export default SavedUsers