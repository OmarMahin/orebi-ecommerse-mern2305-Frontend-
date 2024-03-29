import React from "react"
import Container from "./Container"
import Image from "./Image"

const HomeAds2 = ({ad}) => {
	return (
		<Container>
			<Image src={`images/${ad}`} alt='Ad' className={"my-28 lg:my-32"}></Image>
		</Container>
	)
}

export default HomeAds2
