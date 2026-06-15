import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Getproduct = () => {

  // step 2. hooks
  const[loading,setloading]=useState("")
  const[products,setproducts]=useState([])
  const[error,seterror]=useState("")

  const navigate =useNavigate()

  // bellow is the image url
  const img_url ="https://adhiambo.alwaysdata.net/static/images/"

  // step 3.function to fetch
  const fetchproduct =async()=>{

    // step 4.
    setloading("kindly wait as we fetch the product....")
    // step 6.
    try{
        const response =  await axios.get("https://adhiambo.alwaysdata.net/api/getproducts")

        // step 7.
        setproducts(response.data.products)

        // step 8
        setloading("")
    }
        

    catch(error){
      setloading("")
      seterror(error.message)

    }
  }

  console.log(products)

  // step 5.
  useEffect(()=>{fetchproduct()},[])
  return (
    <div className='row'>

      <h3 className='text-center'>Available product</h3>

      <h3 className='text-info'>{loading}</h3>
    <h3 className='text-danger'>{error}</h3>
     {/* map the products */}
     {products.map((product)=>(
             <div className='col-md-3 justify-content-center mb-4'>
             <div className='card shadow'>
               <img src={img_url +  product.product_photo}alt="" className='product-img'  />
     
               <h4 className='prodname'>{product.product_name}</h4>
     
               <p className='prodDesc'>{product.product_description.slice(0,50)}...</p>
     
               <h2 className='prodcost'>Ksh {product.product_cost}</h2>

               <button className='btn btn-outline-info'
               onClick={()=> navigate('/makepayment',{state:{product}})}
               
               >purchase now</button>
             </div>
           </div>
     ))}
    </div>
  )
}

export default Getproduct
