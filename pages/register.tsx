import React from 'react'
import RegisterPages from '../components/Auth/RegisterPage'
import LayoutAuth from '../layouts/layoutLogin/index'

const Register = () => {
  return (
    <div>
      <LayoutAuth>
        <RegisterPages/>
      </LayoutAuth>
    </div>
  )
}

export default Register
