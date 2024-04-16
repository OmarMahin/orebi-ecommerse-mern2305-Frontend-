import React from "react"
import { Link } from "react-router-dom"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"

const SubCategory = ({ categoryName }) => {
	return (
		<List className={"flex-col"}>
			<ListItem className={"font-DM-sans text-text-light-color text-[17px] py-4 "}>
				<Flex>
					<Link>
						<h4 className=' inline-block ml-4'>{categoryName}</h4>
					</Link>
				</Flex>
			</ListItem>
		</List>
	)
}

export default SubCategory
