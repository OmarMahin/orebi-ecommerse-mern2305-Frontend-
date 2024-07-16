import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import SubCategory from "./SubCategory"

const Category = ({ categoryName, subCategory }) => {
	let [showSubCategory, setShowSubCategory] = useState(false)

	return (
		<List className={"flex-col"}>
			<ListItem
				className={"font-DM-sans text-text-light-color text-[17px] flex-col w-full ml-5"}
				
			>
				{subCategory ? (
					<Flex className={"justify-between w-full py-5 border-b-2 border-[#F0F0F0]"} onClick={() => {
                        setShowSubCategory(!showSubCategory)
                    }}>
						<h4 className=' inline-block'>{categoryName}</h4>
						<span className='text-[20px] font-bold'>{showSubCategory ? "-" : "+"}</span>
					</Flex>
				) : (
					<Flex className={"justify-between w-full py-5 border-b-2 border-[#F0F0F0]"} onClick={() => {
                        setShowSubCategory(!showSubCategory)
                    }}>
						<Link>
							<h4 className=' inline-block'>{categoryName}</h4>
						</Link>
					</Flex>
				)}

				{subCategory && showSubCategory
					? subCategory.map((name) => <SubCategory categoryName={name}></SubCategory>)
					: ""}
			</ListItem>
		</List>
	)
}

export default Category
