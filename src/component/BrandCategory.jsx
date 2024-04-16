import React from "react"
import { Link } from "react-router-dom"
import List from "./List"
import ListItem from "./ListItem"

const BrandCategory = ({brandName}) => {
	return (
		<List>
			<ListItem
				className={
					"font-DM-sans text-text-light-color text-[17px] py-5 border-b-2 border-[#F0F0F0]"
				}
			>
				<Link>
                <h4>{brandName}</h4>
                </Link>
			</ListItem>
		</List>
	)
}

export default BrandCategory
