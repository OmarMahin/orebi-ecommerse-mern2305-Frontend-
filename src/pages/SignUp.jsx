import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Container from '../component/Container'
import SignUpForm from '../component/SignUpForm'

const SignUp = () => {
  return (
    <Container>
        <Breadcrumb></Breadcrumb>
        <SignUpForm></SignUpForm>
    </Container>
  )
}

export default SignUp