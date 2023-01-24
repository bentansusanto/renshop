import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link';

interface HeroProps {
    hero : HeroContent;
    mobile : boolean;
}

interface HeroContent {
    title : string;
    content : string;
}

const HeroSection : React.FC<HeroProps> = ({hero, mobile}) => {
  return (
    <div>
        <div className={styles.background}>
            {/* Content */}
            <div className='pt-[15rem] px-24 space-y-2'>
                <h1 className={`${mobile ? "" : "text-[4rem] w-[35%]"} text-white font-medium font-oswald`}>{hero.title}</h1>
                <p className={`${mobile ? "" : "w-[40%] text-[1rem]"} pb-4`}>{hero.content}</p>
                <button className='bg-black text-white py-2 px-5 rounded-sm'>
                    <Link href={'/'}>
                        View Collections
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection