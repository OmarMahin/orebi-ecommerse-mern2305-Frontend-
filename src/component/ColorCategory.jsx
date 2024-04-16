import React from "react"
import { Link } from "react-router-dom"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"

const ColorCategory = ({colorName, colorCode}) => {
	return (
		<List>
			<ListItem className={"font-DM-sans text-text-light-color text-[17px]"}>
				<Flex className={"items-center gap-2 py-5 border-b-2 border-[#F0F0F0]"}>
					<div className= {`w-3 h-3 rounded-[50%]`} style = {
                        {background: `${colorCode}`}
                    }></div>
					<Link>
						<h4>{colorName}</h4>
					</Link>
				</Flex>
			</ListItem>
            
		</List>
	)
}

export default ColorCategory
