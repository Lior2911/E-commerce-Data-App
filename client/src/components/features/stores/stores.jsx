import React from 'react'
import { useContext } from 'react'
import { Row ,Col } from 'react-bootstrap'
import { storesContext } from '../../../context/storesContext'


const Stores = () => {
  
  const { stores} = useContext(storesContext)
  const storesLength = stores.length
  
  return (
    <div className="pb-1 text-center">
     
    <h1 className="text-primary ">{storesLength} </h1>
    <span>quantity</span>
    

</div>
  )
}
export default Stores
