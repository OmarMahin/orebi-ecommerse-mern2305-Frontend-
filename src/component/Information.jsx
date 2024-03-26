import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import InformationContent from './InformationContent';

const Information = () => {
  return (
    <Container>
        <Flex className={'flex justify-between py-4 md:py-8'}>
            <InformationContent icon={<RiNumber2/>} content = {'Two years warranty'}></InformationContent>
            <InformationContent icon={<FaTruck />} content = {'Free shipping'}></InformationContent>
            <InformationContent icon={<IoMdRefresh />} content = {'Return policy in 30 days'}></InformationContent>
        </Flex>
    </Container>
  )
}

export default Information