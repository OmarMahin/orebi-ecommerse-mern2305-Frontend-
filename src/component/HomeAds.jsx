import React from "react"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"

const HomeAds = ({ad1, ad2, ad3}) => {
	return (
		<Container>
			<Flex className={'flex flex-col sm:flex-row gap-6 sm:gap-7 lg:mt-32 mt-20'}>
				<Image src={`images/${ad1}`} alt='Ad1' className={'sm:w-[49%]'}></Image>
				<Flex className={'flex flex-col sm:justify-between gap-6 lg:gap-0 sm:w-[49%]'}>
					<Image src={`images/${ad2}`} alt='Ad2'></Image>
					<Image src={`images/${ad3}`} alt='Ad3'></Image>
				</Flex>
			</Flex>
		</Container>
	)
}

export default HomeAds
