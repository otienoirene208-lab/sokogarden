import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Makepayment = () => {
  // use the uselocation hook to get the details of the product passed from
  // the previous component
  const { product } = useLocation().state || {}

  const[phone,setphone]=useState("")
 const[loading,setloading]=useState("")
    const[success,setsuccess]=useState("")
    const[error,seterror]=useState("")



  const img_url = "https://adhiambo.alwaysdata.net/static/images/"

  const navigate =useNavigate()

  const payment=async(e)=>{
    e.preventDefault()
    setloading("please wait as we complete the payment...")
    try{
      const formdata =new FormData()

      formdata.append("phone",phone)
      formdata.append("amount",product.product_cost)

      const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/mpesa_payment")
      setsuccess("complete the payment sent on your phone..")
       
      setloading("")
    }
    catch(error){
      setloading("")
      seterror(error.message)

    }
  }


  console.log(product)
  return (
    <div className='row justify-content-center mt-3'>
      <div className='col-md-8 '>
        <div className='card shadow'>
          <section className="row">
            <div className="col-md-6">
            <img src={img_url +  product.product_photo}alt="" className='product-img-pay'  />
            </div>
            <div className="col-md-6">
              <button onClick={()=> navigate("/")} className='btn btn-outline-danger mt-3' >Back</button>

              <h2 className='text-danger mt-2 text-uppercase myh2'>{product. product_name}</h2>

              <p className='tewxt-primary'>{product.product_description}</p>
              <h1 className='text-success myh1'> ksh{product.product_cost}</h1>
            <form className='mt-5' onSubmit={payment}>
            <h4 className='text-info'>{loading}</h4>
              <h4 className='text-success'>{success}</h4>
              <h4 className='text-danger'>{error}</h4>
              <label >Mpesa Number</label>
              <input type="text"
              placeholder='Enter the phone number254...'
              className='form-control' 
              value={phone}
              onChange={(e)=> setphone(e.target.value)}/>

              <button className='btn btn-outline-info mt-2'>Make Payment</button>
            </form>
              
              
            </div>
          </section>
        </div>

      </div>

    </div>
  )
}

export default Makepayment
