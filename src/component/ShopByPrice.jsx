import React from "react"
import Flex from "./Flex"
import PriceCategory from "./PriceCategory"

const ShopByPrice = () => {
	return (
		<div>
			<Flex className={"w-full justify-between items-center  mb-4 mt-14"}>
				<h2 className=' font-DM-sans font-bold text-text-dark-color text-[20px] inline-block'>
					Shop by Price
				</h2>
			</Flex>

			<div>
        <PriceCategory priceRange={'$0.00 - $9.99'}></PriceCategory>
        <PriceCategory priceRange={'$10.00 - $19.99'}></PriceCategory>
        <PriceCategory priceRange={'$20.00 - $29.99'}></PriceCategory>
      </div>
		</div>
	)
}

export default ShopByPrice
