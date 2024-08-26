import React, { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Category from "./Category"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import SubCategory from "./SubCategory"
import axios from "axios"

const ShopByCategory = () => {
	const [refresh, setRefresh] = useState(false)
	const [category, setCategory] = useState([])

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/category/get_all_data")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						setCategory(data.data)
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}, [refresh])

	return (
		<div>
			<h2 className=' font-DM-sans font-bold text-text-dark-color text-[20px] mb-4'>
				Shop by Category
			</h2>
			{/* <Category
				categoryName={"Category 1"}
				subCategory={["Sub Category 1", "Sub Category 2", "Sub Category 4"]}
			></Category> */}
			{category
				? category.map((value) => <Category categoryName={value.categoryName}></Category>)
				: <Category categoryName={"Loading..."}></Category>}
		</div>
	)
}

export default ShopByCategory
