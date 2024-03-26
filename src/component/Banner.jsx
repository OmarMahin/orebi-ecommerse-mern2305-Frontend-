import React from "react"
import Image from "./Image"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import Container from "./Container"

const Banner = () => {
	let settings = {
        autoplay: true,
		dots: true,
		infinite: true,
		arrows: false,
		speed: 100,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: (dots) => (
			<Container>
				<div className='bg-transparent rounded-[10px] absolute top-[50%] p-2 -translate-y-1/2 font-DM-sans text-[8px] md:text-sm'>
					<ul className='m-0'> {dots} </ul>
				</div>
			</Container>
		),
        customPaging: i => (
            <div className="p-1 md:p-2 border-r-[1px] md:border-r-2 border-white bannerIndex duration-200 text-transparent"
            >
              0{i+1}
            </div>
          )
	}
	return (
		<Slider {...settings}>
			<div>
				<Image src={"images/banner_image.png"} alt={"Banner Image"}></Image>
			</div>
			<div>
				<Image src={"images/banner_image.png"} alt={"Banner Image"}></Image>
			</div>
			<div>
				<Image src={"images/banner_image.png"} alt={"Banner Image"}></Image>
			</div>
		</Slider>
	)
}

export default Banner
