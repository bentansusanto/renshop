import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar/navbar'
import {Providers} from '../provider/provider'
import Footer from '../components/Footer/footer'
interface LayoutProps{
    children : ReactNode
}

const index = (props :LayoutProps) => {
    const {children} = props
    return (
    <div>
        <Navbar/>
        <Providers>
        <main>{children}</main>
        </Providers>
        <Footer/>
    </div>
  )
}

export default index