import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Container from '../component/Container'
import Flex from '../component/Flex'
import ShopByCategory from '../component/ShopByCategory'


const Products = () => {
    
  return (
    <Container>
        <Breadcrumb></Breadcrumb>

        <Flex className={'mt-32 gap-10'}>
          <div className='w-[20%]'>
            <ShopByCategory></ShopByCategory>
          </div>
          <div className='w-[80%] bg-green-300 h-6'></div>
        </Flex>

        

    </Container>
    
  )
}

export default Products