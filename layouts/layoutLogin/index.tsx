import React, { ReactNode } from 'react'
import {Providers} from '../../provider/provider'

interface AuthProps{
  children : ReactNode
}

const index = (props : AuthProps) => {
  const {children} = props
  return (
    <div>
      <Providers>
        <main>{children}</main>
      </Providers>
    </div>
  )
}

export default index
