import React,{useEffect, useRef} from 'react'
import Image from 'next/image';
import Star from '../../../public/assets/Star.svg'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { fetchProducts } from '../../../slice/productSlice';



interface productProps {
    mobile : boolean;
    category : Category[];
}
interface Category {
    image : string;
    category : string;
    link : string;
}


const ProductSection : React.FC<productProps> = ({mobile, category}) => {
    const {entities} = useSelector((state : RootState) => state.product)
    const dispatch = useDispatch<AppDispatch>()
    const productRef = useRef(false)

    useEffect(() => {
        if(productRef.current === false){
          dispatch(fetchProducts());
        }
        dispatch(fetchProducts());
    
        return () => {
          productRef.current = true
        }
      }, [dispatch])

  return (
    <div>
        {/* Category */}
        <div className={` ${mobile ? "grid-cols-2 gap-5 mx-5" : "grid-cols-4 gap-5 mx-24"} grid justify-items-center mt-10`}>
           {
            category.map((val,idx) => (
                <Link href={val.link} key={idx} className="relative">
                    <Image src={val.image} alt="" className='w-[20rem]'/>
                    <div className='bg-black w-full py-2 -mt-[2.8rem] opacity-50'>
                        <h4 className=' text-xl font-semibold text-white text-center'>{val.category}</h4>
                    </div>
                </Link>
            ))
           } 
        </div>
        {/* Product List */}
        <div className='mt-32 space-y-24'>
            <h2 className='text-center font-oswald text-2xl font-medium'>Our Produts</h2>
        <div className={`${mobile ? "grid-cols-2 gap-10 mx-6" : "grid-cols-4 gap-5 mx-20"} grid justify-items-center`}>
            {
                entities?.map((val:any) => (
                    <div key={val.id} className="w-[12rem] space-y-3">                       
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