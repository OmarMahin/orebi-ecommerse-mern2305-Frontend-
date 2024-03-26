import React from 'react'
import Flex from './Flex'

const InformationContent = ({icon, content}) => {
  return (
    <Flex className={'flex gap-1 md:gap-2 items-center'}>
        <div className='text-text-dark-color text-sm md:text-xl'>{icon}</div>
        <h3 className='text-text-light-color text-[10px] md:text-sm'>{content}</h3>
    </Flex>
  )
}

export default InformationContent