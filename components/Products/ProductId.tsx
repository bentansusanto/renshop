import React from 'react'



const ProductId  = ({productId} : {productId : any}) => {
  return (
    <div>
      <h1>{productId.title}</h1>
    </div>
  )
}

export default ProductId
