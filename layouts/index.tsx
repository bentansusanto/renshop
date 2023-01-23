import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

interface LayoutProps{
    children : ReactNode
}

const index = (props :LayoutProps) => {
    const {children} = props
    return (
    <div>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default index