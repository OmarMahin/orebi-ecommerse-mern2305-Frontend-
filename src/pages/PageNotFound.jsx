import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'

const PageNotFound = () => {
  return (
    <Container>
        <Flex className={"flex flex-col justify-center items-center font-DM-sans font-bold text-text-dark-color my-20"}>

        <h2 className='text-[100px]'>404</h2>
        <span className='text-xl'>Page not found</span>
        </Flex>
    </Container>
  )
}

export default PageNotFound