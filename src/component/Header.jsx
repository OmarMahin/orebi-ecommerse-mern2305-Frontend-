import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CartAndAccount from './CartAndAccount'
import Container from './Container'
import Flex from './Flex'
import SearchBar from './SearchBar'
import ShopByCategoryMenu from './ShopByCategoryMenu'

const Header = () => {

  
  return (
    <div className='py-6 bg-light-background-color'>
        <Container>
            <Flex className={'flex gap-2 lg:gap-0 justify-between items-center'}>
                <ShopByCategoryMenu></ShopByCategoryMenu>
                <SearchBar></SearchBar>
                <CartAndAccount></CartAndAccount>
            </Flex>
        </Container>
    </div>
  )
}

export default Header