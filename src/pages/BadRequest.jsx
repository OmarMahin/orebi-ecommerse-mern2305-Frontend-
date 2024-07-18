import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'

const BadRequest = () => {
  return (
    <Container>
        <Flex className={"flex flex-col justify-center items-center font-DM-sans font-bold text-text-dark-color my-20"}>

        <h2 className='text-[100px]'>400</h2>
        <span className='text-xl'>Bad Request</span>
        </Flex>
    </Container>
  )
}

export default BadRequest