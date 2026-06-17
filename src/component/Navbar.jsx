import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
const[user,setUser]=useState(null);
const navigate=useNavigate();


// load user from local storage
useEffect(() =>{
  const storedUser=localStorage.getItem("user");
  if (storedUser)
  {
    setUser(JSON.parse(storedUser));
  }
},[]);

// log outr function
const handleLogout=()=>{
 localStorage.removeItem("user");
 setUser(null);
 navigate("/signin");

}



  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-3'>
      <NavLink to="/" className="navbar-brand text-light fw-bold">
        SOKOGARDEN
      </NavLink>


      {/* mobile toggle */}
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav">
        <span className='navbar-toggler-icon'></span>
      </button>


      <div className='collapse navbar-collapse' id="navbarNav">
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/addproduct" className="nav-link">Add product</NavLink>
          </li>



          {/* conditional rendering of components */}
          {user ? (
            <>

            
            {/* username*/}
           <li className='nav-item'>
            <span className='nav-link text-success fw-bold'>
              {user.username}
            </span>
           </li>


           {/* this the log out */}
           <li className='nav-item'>
            <button 
            onClick={handleLogout}
            className='btn btn-sm btn-danger ms-2'>
              Logout
            </button>
           </li>
            </>
          ):

          (
            <>
          <li className='nav-item'>
            <NavLink className='nav-link' to="/signin">Signin</NavLink>
          </li>
          
          <li  className='nav-item'>
            <NavLink className='nav-link' to="/signup">Signup</NavLink>
          </li>
          </>
          )}

          
        </ul>
      </div>




    </nav>
  )
}

export default Navbar
