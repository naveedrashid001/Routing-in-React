import React from 'react'
import { useParams } from 'react-router-dom'
function Crypto() {
    const {cryptosymbol, id} = useParams()
  return (
    <div>
    <div><h3>Crypto</h3></div>
    <h4>symbol: {cryptosymbol}</h4>
    <h3>id: {id}</h3>
    </div>
  )
}

export default Crypto