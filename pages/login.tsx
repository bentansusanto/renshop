import React from 'react'
import LoginPages from '../components/Auth/LoginPage'
import LayoutAuth from '../layouts/layoutLogin/index'

const LoginPage = () => {
  return (
    <div>
      <LayoutAuth>
        <LoginPages/>
      </LayoutAuth>
    </div>
  )
}

export default LoginPage
