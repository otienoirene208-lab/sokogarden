import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Addproduct = () => {
  // step 1.declare the hooks
  const[product_name,setProduct_name]=useState("")
  const[product_description,setproduct_description]=useState("")
  const[product_cost,setproduct_cost]=useState("")
  const[product_photo,setproductphoto]=useState("")

  // step 3.add the three hooks
  const[loading,setloading]=useState("")
  const[success,setsuccess]=useState("")
  const[error,seterror]=useState("")

  // step 4.create a function to handle submit
  const handlesubmit=async(e)=>{

    // step 5. prevent the site from reloading
    e.preventDefault()

    // step 6.update the loading hooks with a message
    setloading("kindly wait for the process to take place...")
    
    // step 7 create a try and catch block
    try{

      //step create aform data object
      const formdata = new FormData()

      // step 9 append the details
      formdata.append("product_name",product_name)
      formdata.append("product_description",product_description)
      formdata.append("product_cost",product_cost)
      formdata.append("photo",product_photo)

      // step 10.interact with the axios module
      const response =await axios.post("https://adhiambo.alwaysdata.net/api/addproduct",formdata)

      // step 11.set back the loading hook to emtpy
      setloading("false")
      setsuccess(" successful")

      // step 12. use state to check message
      if(response.data.success==="welcome"){
        Navigate("/")
      }
      else{
        seterror("")
      }
    }
    catch(error){
      // step 13 .set loading back to default
      setloading("")
      seterror("something went wrong .try again")

    }
  }
  

  return (
    <div className='row justify-content-center mt-4'>
      
      <div className='col-md-6 p-4 card shadow'>   
            <h1> Add Product</h1>
            <h4 className='text-info'>{loading}</h4>
            <h4 className='text-success'>{success}</h4>
            <h4 className='text-danger'>{error}</h4>

            <form onSubmit={handlesubmit}>
              {/* step 2.test the hooks */}
              <input type="text" 
              placeholder='Enter the name of the product'
              value={product_name}
              onChange={(e)=> setProduct_name(e.target.value)}
              className='form-control'
              required/> <br />

              {/* {product_name} */}

              <input type="text" 
              placeholder='Enter the product description'
              value={product_description}
              onChange={(e)=> setproduct_description(e.target.value)}
              className='form-control'
              required/> <br />

              {/* {product_description} */}

              <input type="number"
              placeholder='Enter the price of the product' 
              value={product_cost}
              onChange={(e)=>setproduct_cost(e.target.value)}
              className='form-control'
              required/> <br />

              {/* {product_cost} */}

              <label>product photo</label>
              <input type="file" 
              accept='images/*'
              onChange={(e)=> setproductphoto(e.target.files[0])}
              className='form-control'/> <br />

              <input type="submit"
              value='Add Product' 
              className='btn btn-info'/>
            
        
            </form>
            </div>
    </div>
  )
}

export default Addproduct
