import axios from 'axios'
import React, { useEffect, useState } from 'react'

function User({match}) {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
        .then((res)=> setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=> console.log(err))
    },[])

    return (
        <div>
            <h1>{user.email}</h1>
        </div>
    )
}

export default User
