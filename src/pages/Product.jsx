import React from 'react'
// import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'    // navagate to other page 
function Product() {

  const navagate = useNavigate()
  return (
    <div>
      <h4>Product</h4>
      <button onClick={()=>{
        navagate("/product/create")
      }} className='btn btn-primary'>Add Product</button>
    </div>
  )
}

export default Product