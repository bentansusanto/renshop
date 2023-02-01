import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { fetchProductsByCategory } from '../../slice/productSlice';
import Image from 'next/image';
import Star from '../../public/assets/Star.svg'

const CategoryPage = ({categoryId} : {categoryId : string}) => {
  const dispatch = useDispatch<AppDispatch>()
  const {byCategory} = useSelector((state : RootState) => state.product)
  const products = byCategory[categoryId] || [];

  useEffect(() => {
      dispatch(fetchProductsByCategory(categoryId))
  }, [dispatch, categoryId])


  return (
    <div className='my-40'>
      <h1 className='text-center font-oswald font-semibold capitalize text-[3rem]'>{categoryId}</h1>
      <ul className='grid grid-cols-3 gap-5 mx-20 mt-20 justify-items-center'>
        {
          products.map((product : any) => (
            <li key={product.id} className="space-y-2">
                <Image src={product.image} alt="" width={280} height={280} className="mx-auto"/>
                {/* rating */}
                <div className='flex items-center justify-center space-x-2'>
                  <Image src={Star} alt=""/>
                  <p>{product.rating.rate}</p>
                </div>
                {/* title and price */}
                <div className='text-center space-y-2'>
                  <h4 className='text-md w-[70%] mx-auto'>{product.title}</h4>
                  <h4 className='text-xl font-semibold'>${product.price}</h4>
                </div>
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoryPage
