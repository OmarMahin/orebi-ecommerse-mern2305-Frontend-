import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"
import List from "./List"
import ListItem from "./ListItem"
import { FaBars } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Navbar = () => {
	let [showNav, setShowNav] = useState(false)

	useEffect(() => {
		function checkSize() {
			if (window.innerWidth < 1024) {
				setShowNav(false)
			} else {
				setShowNav(true)
			}
		}
		checkSize()
		window.addEventListener("resize", checkSize)
	}, [])

	let handleNavState = () => {
		setShowNav(!showNav)
	}

	return (
		<Container>
			<div className='py-8'>
				<Flex className={"justify-between items-start"}>
					<Image src='/images/logo.png' alt='logo'></Image>
					<FaBars
						className='absolute right-5 top-6 p-1 text-text-dark-color border-2 border-text-dark-color text-[25px] hover:text-white rounded lg:hidden hover:bg-text-dark-color duration-200 hover:cursor-pointer'
						onClick={handleNavState}
					/>
					{showNav && (
						<List className={"gap-10 lg:static absolute right-5 top-14 text-right"}>
							<ListItem
								className={
									"text-[14px] font-DM-sans text-text-light-color hover:font-bold hover:text-text-dark-color duration-200 hover:cursor-pointer"
								}
							>
								<Link to={"/"}>Home</Link>
							</ListItem>
							<ListItem
								className={
									"text-[14px] font-DM-sans text-text-light-color hover:font-bold hover:text-text-dark-color duration-200 hover:cursor-pointer"
								}
							>
								<Link to={"/products"}>Shop</Link>
							</ListItem>
							<ListItem
								className={
									"text-[14px] font-DM-sans text-text-light-color hover:font-bold hover:text-text-dark-color duration-200 hover:cursor-pointer"
								}
							>
                <Link to={"/about"}>
								About
                </Link>
							</ListItem>
							<ListItem
								className={
									"text-[14px] font-DM-sans text-text-light-color hover:font-bold hover:text-text-dark-color duration-200 hover:cursor-pointer"
								}
							>
								Contacts
							</ListItem>
							<ListItem
								className={
									"text-[14px] font-DM-sans text-text-light-color hover:font-bold hover:text-text-dark-color duration-200 hover:cursor-pointer"
								}
							>
								Journel
							</ListItem>
						</List>
					)}
				</Flex>
			</div>
		</Container>
	)
}

export default Navbar
