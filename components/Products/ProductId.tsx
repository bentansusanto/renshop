import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchProductById } from '../../slice/productSlice';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Star from '../../public/assets/Star.svg'

const ProductDetails : NextPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {product} = useSelector((state : RootState) => state.product)
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchProductById(id as any))
  }, [dispatch, id])
  
  return (
    <div className='my-36'>
      <div className='flex mx-56'>
        <Image src={product.image} alt="" width={280} height={280}/>
        <div className='ml-32'>
          <h1 className='text-3xl font-bold'>{product.title}</h1>
          {/* Rating */}
          <div className='flex items-center space-x-2 mt-5'>
            <Image src={Star} alt=""/>
            <p>{product.rating.rate}</p>
          </div>
          {/* Add Cart and price */}
          <div className='flex space-x-10 items-center mt-10'>
            <button className='text-white bg-black py-2 px-5'>
              Add Cart
            </button>
            <p className='text-xl font-semibold'>${product.price}</p>
          </div>

          {/* Description */}
          <div className='mt-10 space-y-3'>
            <h4 className='font-medium text-lg'>Description</h4>
            <p className='font-thin w-[70%]'>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerProps : GetServerSideProps = async(context) => {
  const { id } = context.query;
  const product = id as string;
  return { props: { product } };
}

export default ProductDetails
