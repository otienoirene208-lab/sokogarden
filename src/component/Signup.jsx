import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

  //step 1. Bellow are our hooks that enables us to store the state of our application
  const[username,setusername]= useState("")
  const[email,setemail]= useState("")
  const[password,setpassword]=useState("")
  const[phone,setphone]=useState("")

  //step 3. three additional hooks
  const[loading,setloading]=useState("")
  const[error,seterror]=useState("")
  const[success,setsuccess] =useState("")

  //step 4. Bellow is our function
  const handlesubmit =async(e)=>{
    // prevent defaults - it means yoou are preventing the browser  from reloading when a
    //step 5. user submits details for registration
    e.preventDefault()

    // step 6.update loading page
    setloading("Regisration in progress...")

    // step 7.try catch block
    try{
    // step 8.  create a form data object
    const formData =new FormData()

    // step 9.append
    formData.append("username",username)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("phone",phone)

    // step 10.axios
    const response =await axios.post("https://adhiambo.alwaysdata.net/api/signup",formData)

    // step 11.
    setloading("")
    setsuccess("user registared successfully.")

    // step 12.
    setusername("")
    setemail("")
    setpassword("")
    setphone("")
    }
    catch(error){
      //step 13.
      setloading("") 
      seterror("sorry, sothing happened .please try again..")
      

    }

  }
  
  return (
    <div className='row justify-content-center mt-4'>
         
              <div className='col-md-6 p-4 card shadow'>
              <h1> Signup</h1> 
             
           <form  onSubmit={handlesubmit}>

              <h4 className='text-info'>{loading}</h4>
              <h4 className='text-success'>{success}</h4>
              <h4 className='text-danger'>{error}</h4>
            <input type="text"
            placeholder='Enter your username'
            value={username}
            onChange={(e)=> setusername(e.target.value)}
            className='form-control' />

            {/* {username} */}

            <br />
            <br />

            <input type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e)=> setemail(e.target.value)}
            className='form-control' />

            {/* {email} */}

            <br />
            <br />
            <input type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            className='form-control' />


            {/* {password} */}
            
            <br />
            <br />
            <input type="phone"
             placeholder='Enter phone'
             value={phone}
             onChange={(e)=> setphone(e.target.value)}
             className='form-control'/><br /><br />
             {/* {phone} */}

            <input type="submit"value="signup" className='btn btn-outline-primary'/>
            


           </form>
           </div>

    </div>
  )
}

export default Signup
