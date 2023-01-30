import React from 'react'
import Link from 'next/link';

const ErrPage = () => {
  return (
    <div>
        <h1>Opps... Page not found</h1>
        <Link href={'/'}>Homepage</Link>
    </div>
  )
}

export default ErrPage
