import React from 'react'
import { useContext } from 'react'
import { Row ,Col } from 'react-bootstrap'
import { lastOrderContext } from '../../../context/lastOrderContext'


const LastOrder = () => {
  
  const { lastOrder} = useContext(lastOrderContext)
  const lastOrderLength = lastOrder.length
  
  return (
    <div className="pb-1 text-center bg-white roundedCircle " >
      <h5>last orders</h5>
     
    <h1 className="text-primary ">{lastOrderLength} </h1>
    <span>of 400</span>
    

</div>
  )
}
export default LastOrder