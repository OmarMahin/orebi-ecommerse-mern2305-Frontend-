import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Container from '../component/Container'
import LoginForm from '../component/LoginForm'

const Login = () => {
  return (
    <Container>
        <Breadcrumb></Breadcrumb>
        <LoginForm heading={"Customer Login"} loginFor = {'member'}></LoginForm>
    </Container>
  )
}

export default Login