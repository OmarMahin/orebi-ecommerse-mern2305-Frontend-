import React from "react"
import { useState } from "react"
import Flex from "./Flex"
import { GoTriangleUp } from "react-icons/go"
import { GoTriangleDown } from "react-icons/go"
import ColorCategory from "./ColorCategory"

const ShopByColor = () => {
	let [showList, setShowList] = useState(true)
	return (
		<div>
			<Flex className={"w-full justify-between items-center  mb-4 mt-14"} onClick = {()=>{setShowList(!showList)}}>
				<h2 className=' font-DM-sans font-bold text-text-dark-color text-[20px] inline-block'>
					Shop by Color
				</h2>
				{showList ? (
					<GoTriangleUp className='text-[19px] text-text-dark-color' />
				) : (
					<GoTriangleDown className='text-[19px] text-text-dark-color' />
				)}
			</Flex>
			{showList && (

                <div>

				<ColorCategory colorName={'Color 1'} colorCode={"#000000"}></ColorCategory>
				<ColorCategory colorName={'Color 2'} colorCode={"#FF8686"}></ColorCategory>
				<ColorCategory colorName={'Color 3'} colorCode={"#7ED321"}></ColorCategory>
				
                </div>
                
			)}
		</div>
	)
}

export default ShopByColor
