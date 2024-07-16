import React from "react"
import Container from "./Container"
import ProductsItem from "./ProductsItem"
import Slider from "react-slick"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { FaLongArrowAltRight } from "react-icons/fa"
import "slick-carousel/slick/slick.css"

const ProductsList = ({ heading, products }) => {
	function nextArrowDesign() {
		return (
			<div>
				<FaLongArrowAltRight className='absolute top-[50%] right-0 -translate-y-1/2 p-3 lg:p-4 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#979797] opacity-[0.7] text-white z-30' />
			</div>
		)
	}

	function previousArrowDesign() {
		return (
			<div>
				<FaLongArrowAltLeft className='absolute top-[50%] left-0 -translate-y-1/2 p-3 lg:p-4 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#979797] opacity-[0.7] text-white z-30' />
			</div>
		)
	}

	let settings = {
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: nextArrowDesign(),
		prevArrow: previousArrowDesign(),
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
					infinite: true,
					arrows: true,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: false,
					infinite: true,
					arrows: true,
				},
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: false,
					infinite: true,
					arrows: true,
				},
			},
		],
	}

	return (
		<Container>
			<Slider {...settings}>
				{products.map((i) => (
					<ProductsItem
						productImg={`images/${i.productImg}`}
						productName={i.productName}
						productPrice={i.productPrice}
						productColor={i.productColor}
						newItem= {i.newItem}
					></ProductsItem>
				))}
			</Slider>
		</Container>
	)
}

export default ProductsList
