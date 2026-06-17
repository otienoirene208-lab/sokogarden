import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  // step 1:declare the hooks
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")

    // step3.declare three additional hooks
    const[loading,setloading]=useState("")
    const[success,setsuccess]=useState("")
    const[error,seterror]=useState("")

    // step 14.create a usenavigate hook that wiil enable you to redirect users to the homepage 
    // after a successful login in.
    const navigate =useNavigate()

    // step4. create a function to handle submit action
    const handlesubmit =async(e)=>{

      // step5.prevent the site from reloading
      e.preventDefault()

      // step6.update the loading hook with a message
      setloading("wait for a few seconds...")

      // step7.create a try and catch block
      try{
        // step8.create a form data object
        const formdata =new FormData()

        // step9.append the details into the form data
        formdata.append("email",email)
        formdata.append("password",password)

        // step10.interact with the axios module
        const response =await axios.post("https://adhiambo.alwaysdata.net/api/signin",formdata)

        // step11.set back the loading hook to empty
        setloading("")

        // step12. by use of an if statement,check whether there is a success message given back 
        // as a response from the hosted api.if there is ,it meanes the user has entered corect  details 
        // give a response tothe user meaning the details he entered are incorrect.
        if(response.data.success==="welcome"){
          // setsuccess("login success")
          // bellow we redirect our user to home page

          localStorage.setItem("user", JSON.stringify(response.data.user));
         navigate("/") 
        }
        else{
          seterror("login unsuccessful")
        }
     }
     catch(error){
      // step13. set loading back to default and update the error hook just incase there is an error
      setloading("")
      seterror("sorry, something wrong happened .please try again...")
     }

    }
  return (
    <div className='row  justify-content-center mt-4'>
      <div className='col-md-6 p-4 card shadow'>
            <h1>Signin</h1>

            <h4 className='text-info'>{loading}</h4>
            <h4 className='text-success'>{success}</h4>
            <h4 className='text-danger'>{error}</h4>

            <form onSubmit={handlesubmit}>
              {/* step 2 .test the hooks */}
              <input type="email"
              value={email}
              onChange={(e)=>setemail(e. target.value)}
              placeholder='Enter your email'
              className='form-control' />
              {/* {email} */}
              <br />
              <br />

              <input type="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              placeholder='Enter your password'
              className='form-control' />
              {/* {password} */}
              <br /><br />

              <input type="submit"
              value="signin" className='btn btn-outline-primary'/>
            
              
            </form>
            </div>
    </div>
  )
}

export default Signin
