import React from "react"
import { Link } from "react-router-dom"
import List from "./List"
import ListItem from "./ListItem"

const FooterItemList = ({ heading, links }) => {
	return (
		<div>
			<h3 className=" font-DM-sans font-bold text-text-dark-color text-base mb-4">{heading}</h3>
			<List className={'flex flex-col gap-2'}>
				{links.map((item) => (
					<ListItem className={' font-DM-sans text-sm text-text-light-color'}>
						<Link>{item}</Link>
					</ListItem>
				))}
			</List>
		</div>
	)
}

export default FooterItemList

