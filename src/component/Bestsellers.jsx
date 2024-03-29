import React from "react"
import Container from "./Container"
import ProductsList from "./ProductsList"

const Bestsellers = () => {
	return (
		<Container>
			<h3 className='mt-28 mb-12 font-DM-sans font-bold text-text-dark-color text-2xl lg:text-4xl'>
				Our Bestsellers
			</h3>
			<ProductsList
				products={[
					{
						productName: "Basic Crew Neck Tee",
						productImg: "bestseller_1.png",
						productPrice: "$44.00",
						productColor: "Black",
						newItem: false,
					},
					{
						productName: "Basic Crew Neck Tee",
						productImg: "bestseller_2.png",
						productPrice: "$44.00",
						productColor: "Black",
						newItem: false,
					},
					{
						productName: "Bennie",
						productImg: "bestseller_3.png",
						productPrice: "$44.00",
						productColor: "Black",
						newItem: false,
					},
					{
						productName: "Basic Crew Neck Tee",
						productImg: "bestseller_4.png",
						productPrice: "$44.00",
						productColor: "Black",
						newItem: false,
					},
				]}
			></ProductsList>
		</Container>
	)
}

export default Bestsellers
