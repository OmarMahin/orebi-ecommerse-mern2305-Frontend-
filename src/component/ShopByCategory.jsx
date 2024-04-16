import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Category from "./Category"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import SubCategory from "./SubCategory"

const ShopByCategory = () => {
	return (
		<div>
			<h2 className=' font-DM-sans font-bold text-text-dark-color text-[20px] mb-4'>
				Shop by Category
			</h2>
			<Category
				categoryName={"Category 1"}
				subCategory={["Sub Category 1", "Sub Category 2", "Sub Category 4"]}
			></Category>
			<Category categoryName={"Category 2"}></Category>
			<Category categoryName={"Category 3"}></Category>
		</div>
	)
}

export default ShopByCategory
