import React from 'react'
import { useNavigate } from 'react-router-dom' 

function CreateProduct() {
  const navagate = useNavigate()
  return (
     <div> 
      <h4>CreateProduct</h4>
      <button onClick={()=>{
        navagate("/product/detail")
      }} className='btn btn-primary'>Product Details</button>
      {/* back button */}
      <button onClick={()=>{
        navagate(-1)
      }} className='btn btn-danger'>Go back</button>
      </div>
    
  )
}

export default CreateProduct