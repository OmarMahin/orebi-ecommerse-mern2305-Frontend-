import React, { useEffect, useState } from "react"
import Container from "../component/Container"
import Flex from "../component/Flex"
import Image from "../component/Image"
import Button from "../component/Button"
import BackButton from "../component/BackButton"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const ProductDetailsPage = () => {
	const { id } = useParams()
	const navigation = useNavigate()

	const [product, setProduct] = useState({})

	useEffect(() => {
		axios
			.post("http://localhost:3000/api/v1/product/find_product", { id })
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (!data.success) {
						navigation("*")
					} else {
						setProduct(data.data)
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<Container>
			<Flex className={"flex flex-col w-[90%] mx-auto mt-10"}>
				<BackButton></BackButton>
				<Flex className={"flex gap-3 mb-3 border-b-[1px] border-[#dbdbdb] mt-5"}>
					<div className='w-[60%] h-[400px] relative'>
						<Image
							src={
								product?.productImage
							}
							alt={"product image"}
							className={
								"h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
							}
						></Image>
					</div>

					<Flex className='w-[40%] font-DM-sans font-bold text-text-dark-color gap-6 flex flex-col'>
						<h1 className='text-3xl'>{product?.productName}</h1>
						<h3 className='text-2xl font-semibold'>{product?.productPrice}</h3>

						<Flex className={"flex gap-2"}>
							<span className='font-normal'>Avaibility: </span>
							<span className='font-semibold'>{product?.productQuantity}</span>
						</Flex>
						<span className='font-normal'>{`Made in ${product?.productOrigin}`}</span>
						<Flex className={"flex gap-3"}>
							<Button className={"w-fit"}>Add to cart</Button>
							<Button className={"w-fit"}>Add to wishlist</Button>
						</Flex>
					</Flex>
				</Flex>
				<Flex className={"flex flex-col gap-7 my-10"}>
					<h2 className='font-DM-sans font-bold text-text-dark-color text-3xl'>Description</h2>
					<div
						className='font-DM-sans font-normal text-text-dark-color text-lg'
						dangerouslySetInnerHTML={{ __html: product?.productDescription }}
					></div>
				</Flex>
			</Flex>
		</Container>
	)
}

export default ProductDetailsPage
