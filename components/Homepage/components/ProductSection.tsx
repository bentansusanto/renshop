import React,{useEffect, useRef} from 'react'
import Image from 'next/image';
import Star from '../../../public/assets/Star.svg'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { fetchProducts} from '../../../slice/productSlice';
import { fetchProductById } from '../../../slice/productSlice';
import { useRouter } from 'next/router';

interface productProps {
    mobile : boolean;
}


const ProductSection : React.FC<productProps> = ({mobile}) => {
    const {products} = useSelector((state : RootState) => state.product)
    const dispatch = useDispatch<AppDispatch>()
    const productRef = useRef(false)
    const router = useRouter()
    
    // Get All Product
    useEffect(() => {
        if(productRef.current === false){
          dispatch(fetchProducts());
        }
        dispatch(fetchProducts());
    
        return () => {
          productRef.current = true
        }
      }, [dispatch])

      const handleProductDetail = (id : number) => {
        dispatch(fetchProductById(id))
        router.push(`/product/${id}`)
      }

   
  return (
    <div>
        {/* Product List */}
        <div className='mt-32 space-y-24'>
            <h2 className='text-center font-oswald text-2xl font-medium'>Our Produts</h2>
        <div className={`${mobile ? "grid-cols-2 gap-10 mx-6" : "grid-cols-4 gap-5 mx-20"} grid justify-items-center`}>
            {
                products?.map((val:any) => (
                    <div key={val.id} className="w-[12rem] space-y-3" onClick={() => handleProductDetail(val.id)}>                       
                            <Image src={val.image} alt="" width={200} height={180} className='py-2 px-2'/>
                            {/* content */}
                            <div>
                                {/* rating */}
                                <div className='justify-center flex space-x-2 items-center'>
                                    <Image src={Star} alt=""/>
                                    <p>{val.rating.rate}</p>
                                </div>
                                <h4 className={`${mobile ? "text-[.9rem]" : ""} font-regular text-center`}>{val.title}</h4>
                                <p className='text-center font-semibold text-[1.2rem]'>${val.price}</p>
                            </div>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default ProductSection