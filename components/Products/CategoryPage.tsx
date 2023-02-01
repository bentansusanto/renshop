import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { fetchProductsByCategory } from '../../slice/productSlice';
import Image from 'next/image';

const CategoryPage = ({categoryId} : {categoryId : string}) => {
  const dispatch = useDispatch<AppDispatch>()
  const {byCategory} = useSelector((state : RootState) => state.product)
  const products = byCategory[categoryId] || [];

  useEffect(() => {
      dispatch(fetchProductsByCategory(categoryId))
  }, [dispatch, categoryId])


  return (
    <div>
      <h1 className='text-center'>{categoryId}</h1>
      <ul>
        {/* {
          products.map((product : any) => (
            <li key={product.id}>
                <Image src={product.image} alt="" width={300} height={300}/>
              {product.title}</li>
          ))
        } */}
      </ul>
    </div>
  )
}

export default CategoryPage
