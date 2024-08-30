import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'   /// it is used to show him counter store value
import { increment, decrement, incrementMultiplier, decrementMultiplier } from '../redux/slice/CounterSlice';   

function Counter() {
    const count = useSelector((state)=>state.counterStore.count)
    const [multiplier, setmultiplier] = useState (10)
    const Dispatch = useDispatch(); // dispath is used to run action 
  return (
    <div>
        <div className='mt-2 pt-3 pl-2 text-center' style={{borderTop:"1px solid #999"}}>
          <div className='text-white pb-2 h4'> Counter: {count}</div>
          <div className='row'>
            <div className='p-4 col-12 col-md-6'>
              <div className='border p-4'> 
              <div className='text-success pb-2'> Basic Counter</div>
                <button className='btn btn-primary' onClick={()=>Dispatch(increment())}> Add</button> {" "}
                <button className='btn btn-danger' onClick={()=>Dispatch(decrement())}> Remove</button> 


              </div>
            </div>
            <div className='p-4 col-12 col-md-6'>
              <div className='border p-4'>
                <div className='text-success pb-2'> Multiplier Counter</div>
                <div className='row'>
                  <div className='col-4 p-1'>
                    <input type="text"  placeholder='Multiplier...' className='form-control'
                    value={multiplier} onChange={(e)=>setmultiplier(e.target.value)}   />
                  </div>
                  <div className='col-4 p-1'> <button className='btn btn-primary form-control' onClick={()=>Dispatch(incrementMultiplier(multiplier))}> Add</button> {" "}
                  </div>
                  <div className='col-4 p-1'><button className='btn btn-danger form-control' onClick={()=>Dispatch(decrementMultiplier(multiplier))}> Remove</button> 
                  </div>
                </div>
                

              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Counter