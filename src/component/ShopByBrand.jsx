import React from "react"
import { useState } from "react"
import Flex from "./Flex"
import { GoTriangleUp } from "react-icons/go"
import { GoTriangleDown } from "react-icons/go"
import BrandCategory from "./BrandCategory"

const ShopByBrand = () => {
	let [showList, setShowList] = useState(true)
	return (
		<div>
			<Flex
				className={"w-full justify-between items-center  mb-4 mt-14"}
				onClick={() => {
					setShowList(!showList)
				}}
			>
				<h2 className=' font-DM-sans font-bold text-text-dark-color text-[20px] inline-block'>
					Shop by Brand
				</h2>
				{showList ? (
					<GoTriangleUp className='text-[19px] text-text-dark-color' />
				) : (
					<GoTriangleDown className='text-[19px] text-text-dark-color' />
				)}
			</Flex>
			{showList && (
				<div>
					<BrandCategory brandName={"Brand 1"}></BrandCategory>
					<BrandCategory brandName={"Brand 2"}></BrandCategory>
				</div>
			)}
		</div>
	)
}

export default ShopByBrand
