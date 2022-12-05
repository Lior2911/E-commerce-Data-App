import React from 'react'
import { useContext } from 'react'
import { Row ,Col } from 'react-bootstrap'
import { productContext } from '../../../context/productContext'


const Product = () => {
  
  const { product} = useContext(productContext)
  const productLength = product.length
  
  return (
    <div className="pb-1 text-center">
     
    <h1 className="text-primary">{productLength} </h1>
    <span>quantity</span>
    

</div>
  )
}
export default Product
