import React from "react"
import Container from "./Container"
import ProductsList from "./ProductsList"

const NewArrivals = () => {
	return (
		<Container>
			<h3 className='mt-28 mb-12 font-DM-sans font-bold text-text-dark-color text-2xl lg:text-4xl'>
				New Arrivals
			</h3>
            <ProductsList
				products={[
					{
						productName: "Basic Crew Neck Tee",
						productImg: "product_image_1.png",
						productPrice: "$44.00",
						productColor: "Black",
						newItem: true,
					},
					{
						productName: "Basic Crew Neck Tee",
						productImg: "product_image_2.png",
						productPrice: "$44.00",
						productColor: "Black",
						newItem: true,
					},
					{
						productName: "Bennie",
						productImg: "product_image_3.png",
						productPrice: "$44.00",
						productColor: "Black",
						newItem: true,
					},
					{
						productName: "Basic Crew Neck Tee",
						productImg: "product_image_4.png",
						productPrice: "$44.00",
						productColor: "Black",
						newItem: true,
					},
					
				]}
			></ProductsList>
		</Container>
	)
}

export default NewArrivals
