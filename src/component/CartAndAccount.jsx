import React from "react"
import { useState } from "react"
import { IoMdPerson } from "react-icons/io"
import { IoCaretDown } from "react-icons/io5"
import { PiShoppingCartFill } from "react-icons/pi"
import { TiArrowSortedUp } from "react-icons/ti"
import { IoClose } from "react-icons/io5"
import Flex from "./Flex"
import Image from "./Image"
import { Link, useNavigate } from "react-router-dom"
import List from "./List"
import ListItem from "./ListItem"
import Button from "./Button"
import { useEffect } from "react"
import { useRef } from "react"
import axios from "axios"

const CartAndAccount = () => {
	axios.defaults.withCredentials = true

	const navigation = useNavigate()

	let [refresh, setRefresh] = useState(false)

	let [loggedIn, setLoggedIn] = useState(false)
	let accountRef = useRef()
	let cartRef = useRef()

	let [showAccount, setShowAccount] = useState(false)
	let [showCart, setShowCart] = useState(false)

	let handleShowAccount = () => {
		setShowAccount(!showAccount)
	}

	let handleShowCart = () => {
		setShowCart(!showCart)
	}

	let logInAndAccount = () => {
		if (!loggedIn) {
			navigation("/login")
		}
	}

	let signInAndLogout = () => {
		if (!loggedIn) {
			navigation("/sign_up")
		} else if (loggedIn) {
			axios
				.get("http://localhost:3000/api/v1/auth/logout")
				.then((response) => {
					if (response.status == "200") {
						window.location.pathname = "/"
					}
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (accountRef) {
				if (!accountRef.current.contains(e.target)) {
					setShowAccount(false)
				}
			}

			if (cartRef) {
				if (!cartRef.current.contains(e.target)) {
					setShowCart(false)
				}
			}
		})

		axios
			.get("http://localhost:3000/api/v1/verify/authorize_user")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.authorized && !loggedIn) {
						setLoggedIn(true)
					} else if (!data.authorized && loggedIn) {
						setLoggedIn(false)
						window.location.reload()
					}
				}
			})
			.catch((err) => {
				setLoggedIn(false)
			})

		setTimeout(() => {
			setRefresh(!refresh)
		}, 120000)
	}, [refresh])

	return (
		<Flex className={"flex items-center text-text-dark-color gap-3 lg:gap-8 relative"}>
			<div ref={accountRef}>
				<Flex
					className={"flex items-center gap-1 hover:cursor-pointer relative"}
					onClick={handleShowAccount}
				>
					<IoMdPerson className='w-5 h-5' />
					{showAccount ? (
						<IoCaretDown className='-rotate-180 duration-300' />
					) : (
						<IoCaretDown className='-rotate-0 duration-300' />
					)}

					{showAccount && (
						<div className='absolute -bottom-4 right-0 translate-y-[100%] z-20'>
							<List className={"flex-col gap-0"}>
								<ListItem
									className={
										"border-2 border-[#F0F0F0] border-b-0 py-4 px-14 hover:bg-white hover:text-text-dark-color font-DM-sans w-52 bg-text-dark-color text-white duration-150"
									}
									onClick={logInAndAccount}
								>
									{loggedIn ? "My Account" : "Log in"}
								</ListItem>
								<ListItem
									className={
										"border-2 border-[#F0F0F0] border-t-0 py-4 px-14 hover:bg-white hover:text-text-dark-color font-DM-sans w-52 bg-text-dark-color text-white duration-150"
									}
									onClick={signInAndLogout}
								>
									{loggedIn ? "Log out" : "Sign up"}
								</ListItem>
							</List>
						</div>
					)}
				</Flex>
			</div>

			<div ref={cartRef}>
				<Link to={"/cart"}>
					<PiShoppingCartFill
						className='w-5 h-5 hover:cursor-pointer'
						onClick={handleShowCart}
					/>
				</Link>
			</div>
		</Flex>
	)
}

export default CartAndAccount
