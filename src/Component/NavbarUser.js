import React from 'react'
import { Link } from 'react-router-dom'

function NavbarUser({isAuth,setIsAuth}) {
    return (
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>

                {
                    isAuth ? 
                    <div>
                        <Link to='/Listofusers'><li>List of users</li></Link>
                        <li onClick={()=>setIsAuth(false)}>Logout</li>
                    </div>
                    
                    :

                    <li onClick={()=>setIsAuth(true)}>Login</li>
                }
                {/* <Link to='/Listofusers'><li>List of users</li></Link>
                <li>Login</li>
                <li>Logout</li> */}
            </ul>
        </div>
    )
}

export default NavbarUser
