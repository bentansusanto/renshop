import React from 'react'
import Layouts from '../../layouts'
import ProductId from '../../components/Products/ProductId';
import { useRouter } from 'next/router';

// interface Product{
//   id : number,
//   title : string,
//   description : string,
//   price : string,
//   rating : {
//     rate : number
//   }
// }

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query

  return (
    <div>
      <Layouts>
        <ProductId productId={productId}/>
      </Layouts>
    </div>
  )
}

export default ProductDetail
