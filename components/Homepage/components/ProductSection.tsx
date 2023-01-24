import React from 'react'
import Image from 'next/image';
import Star from '../../../public/assets/Star.svg'
import Link from 'next/link';

interface productProps {
    product : productContent[];
    mobile : boolean;
    category : Category[];
}

interface productContent{
    id : number;
    title : string;
    price : number;
    image :string;
    rating : {
        rate : number;
        count : number;
    };
}

interface Category {
    image : string;
    category : string;
    link : string;
}

const ProductSection : React.FC<productProps> = ({product, mobile, category}) => {
  return (
    <div>
        {/* Category */}
        <div className='grid grid-cols-4 gap-x-2 mx-24 justify-items-center mt-10'>
           {
            category.map((val,idx) => (
                <Link href={val.link} key={idx}>
                    <Image src={val.image} alt="" className='w-[20rem]'/>
                    <p>{val.category}</p>
                </Link>
            ))
           } 
        </div>
        {/* Product List */}
        <div className='mt-32 space-y-24'>
            <h2 className='text-center font-oswald text-2xl font-medium'>Our Produts</h2>
        <div className='grid grid-cols-4 gap-5 justify-items-center mx-20'>
            {
                product.map((val) => (
                    <div key={val.id} className="w-[12rem] space-y-3">                       
                            <Image src={val.image} alt="" width={200} height={180} className='py-2 px-2'/>
                            {/* content */}
                            <div>
                                {/* rating */}
                                <div className='justify-center flex space-x-2 items-center'>
                                    <Image src={Star} alt=""/>
                                    <p>{val.rating.rate}</p>
                                </div>
                                <h4 className='font-medium text-center'>{val.title}</h4>
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