import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Container from '../component/Container'
import Login from '../component/LoginForm'

const AdminLoginPage = () => {
  return (
    <Container>
        <Login heading={"Admin Login"} loginFor = {'admin'}></Login>
    </Container>
  )
}

export default AdminLoginPage