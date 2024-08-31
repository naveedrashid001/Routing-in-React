import React from 'react'

import { resetCounter } from '../redux/slice/CounterSlice'
import { resetDestination } from '../redux/slice/destinationSlice'
import { useDispatch} from 'react-redux'



function ResetApp() {
    const Dispatch = useDispatch();
const restCounterAndDestination = ()=>{
    return (
        Dispatch(resetCounter()),
        Dispatch(resetDestination())
    )
}
  return (
    
    <div className='text-center mt-4'> <hr  style={{border:"1px solid white"}}/>
        <button className='btn btn-warning mb-2' onClick={restCounterAndDestination}>Reset App</button>
    </div>
  )
}

export default ResetApp