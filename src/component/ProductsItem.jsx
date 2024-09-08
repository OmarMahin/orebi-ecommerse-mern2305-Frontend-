import React from "react"
import Flex from "./Flex"
import Image from "./Image"
import List from "./List"
import ListItem from "./ListItem"
import { FaHeart } from "react-icons/fa"
import { FaArrowsRotate } from "react-icons/fa6"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"

const ProductsItem = ({ productName, productImg, productPrice, productQuantity, newItem, productId }) => {
	return (
		<div className='relative w-fit mx-3'>
			{newItem === true ? (
				<h4 className='absolute top-5 left-5 py-2 px-7 bg-text-dark-color text-white text-sm font-DM-sans font-bold z-10'>
					New
				</h4>
			) : (
				""
			)}

			<div className='relative overflow-hidden group'>
				<Image
					src={`${productImg}`}
					alt={"Product Image"}
					className='w-[300px] h-[300px]'
				></Image>
				<div className='w-full bg-white absolute -bottom-[100%] left-0 group-hover:bottom-0 duration-300'>
					<List className={"flex items-end p-7 flex-col gap-5"}>
						<ListItem className={"items-center gap-4"}>
							<h3 className='text-text-light-color font-DM-sans text-base hover:text-text-dark-color hover:font-bold duration-200'>
								Add to Wish List
							</h3>
							<FaHeart className='text-text-dark-color' />
						</ListItem>
						<ListItem className={"items-center gap-4"}>
							<h3 className='text-text-light-color font-DM-sans text-base hover:text-text-dark-color hover:font-bold duration-200'>
								Compare
							</h3>
							<FaArrowsRotate className='text-text-dark-color' />
						</ListItem>
						<ListItem className={"items-center gap-4"}>
							<h3 className='text-text-light-color font-DM-sans text-base hover:text-text-dark-color hover:font-bold duration-200'>
								Add to Cart
							</h3>
							<FaShoppingCart className='text-text-dark-color' />
						</ListItem>
					</List>
				</div>
			</div>
			<Flex className={"flex justify-between w-full items-start"}>
				<Link to={`/products/${productId}`}
					className={`inline-block font-DM-sans text-text-dark-color text-lg font-bold max-w-[200px] text-wrap`}
				>
					{productName.length > 30 ? productName.slice(0, 30) + ". . ." : productName}
				</Link>

				<p className='inline-block font-DM-sans text-text-light-color text-base'>
					{`${productPrice} Tk`}
				</p>
			</Flex>
			<h4 className='inline-block font-DM-sans text-text-light-color text-base mt-4'>
				{`In Stock: ${productQuantity}`}
			</h4>
		</div>
	)
}

export default ProductsItem
