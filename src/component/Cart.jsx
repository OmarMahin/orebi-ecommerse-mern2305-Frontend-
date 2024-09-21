import React, { useEffect, useState } from "react"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"
import Image from "./Image"
import IncrementDecrement from "./IncrementDecrement"
import { IoMdClose } from "react-icons/io"
import Button from "./Button"
import axios from "axios"
import { toast } from "react-toastify"

const Cart = ({ user }) => {
	const [cartItems, setCartItems] = useState([])
	const [subTotal, setSubTotal] = useState(0)
	const [refresh, setRefresh] = useState(false)

	const changeQuantity = (product, quantity) => {
		axios
			.post(`http://localhost:3000/api/v1/cart/update_cart`, { user, product, quantity })
			.then((response) => {
				if (response.status == "200") {
					setRefresh(!refresh)
				}
			})
			.catch((error) => {
				toast.error("An error occurred")
				console.log(error)
			})
	}

	const deleteFromCart = (product) => {
		axios
			.post(`http://localhost:3000/api/v1/cart/delete_from_cart`, { user, product })
			.then((response) => {
				if (response.status == "200") {
					toast.success(response.data.message)
					setRefresh(!refresh)
				}
			})
			.catch((error) => {
				toast.error("An error occurred")
				console.log(error)
			})
	}

	useEffect(() => {
		if (user != null) {
			axios
				.get(`http://localhost:3000/api/v1/cart/get_products/${user}`)
				.then((response) => {
					if (response.status == "200") {
						const items = response.data.data
						setCartItems(items)

						setSubTotal(
							items.reduce(
								(sum, current) => current.productPrice * current.productQuantity + sum,
								0
							)
						)
					}
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [refresh])
	return cartItems.length > 0 ? (
		<Flex className={"flex flex-col w-full my-20"}>
			<List
				className={
					"w-full py-8 px-4 bg-light-background-color font-DM-sans text-lg font-semibold text-text-dark-color"
				}
			>
				<ListItem className={"w-[40%]"}>Product</ListItem>
				<ListItem className={"w-[15%]"}>Price</ListItem>
				<ListItem className={"w-[30%]"}>Quantity</ListItem>
				<ListItem className={"w-[15%]"}>Total</ListItem>
			</List>

			{cartItems.map((item) => (
				<List
					className={
						"w-full py-2 px-4 font-DM-sans text-lg font-semibold text-text-dark-color items-center border-b-[2px] border-light-background-color"
					}
				>
					<ListItem className={"w-[5%]"}>
						<IoMdClose
							className='hover:cursor-pointer'
							onClick={() => {
								deleteFromCart(item.productId)
							}}
						/>
					</ListItem>
					<ListItem className={"w-[10%]"}>
						<Image
							src={item.productImage}
							alt={"product"}
							className={"w-[100px] h-[100px]"}
						></Image>
					</ListItem>
					<ListItem className={"w-[25%]"}>
						{item.productName.length > 20
							? item.productName.slice(0, 20) + "..."
							: item.productName}
					</ListItem>
					<ListItem className={"w-[15%]"}>{`${item.productPrice}৳`}</ListItem>
					<ListItem className={"w-[20%]"}>
						<IncrementDecrement
							onChange={(e) => {
								changeQuantity(item.productId, e)
							}}
							value={item.productQuantity}
						></IncrementDecrement>
					</ListItem>
					<ListItem className={"w-[25%] justify-end pr-36"}>{`${
						item.productPrice * item.productQuantity
					}৳`}</ListItem>
				</List>
			))}

			<Flex className={"flex flex-col gap-10 items-end w-full"}>
				<List className={"mt-10 flex-col w-[30%] "}>
					<ListItem className={"border-[2px] border-light-background-color py-5 px-2 pr-20"}>
						<Flex
							className={
								"flex justify-between font-DM-sans font-semibold text-text-dark-color w-full"
							}
						>
							<span>Subtotal</span>
							<span>{`${subTotal}৳`}</span>
						</Flex>
					</ListItem>
					<ListItem className={"border-[2px] border-light-background-color py-5 px-2 pr-20"}>
						<Flex
							className={
								"flex justify-between font-DM-sans font-semibold text-text-dark-color w-full"
							}
						>
							<span>Vat</span>
							<span>{`5%`}</span>
						</Flex>
					</ListItem>
					<ListItem
						className={
							" border-[2px] border-t-0 border-light-background-color py-5 px-2 pr-20"
						}
					>
						<Flex
							className={
								"flex justify-between font-DM-sans font-semibold text-text-dark-color w-full"
							}
						>
							<span>Total</span>
							<span>{`${Math.floor(subTotal + (subTotal * 0.05))}৳`}</span>
						</Flex>
					</ListItem>
				</List>

				<Button>Checkout</Button>
			</Flex>
		</Flex>
	) : (
		<Flex className={"justify-center mt-10 mb-40"}>
			<span className='font-DM-sans font-semibold text-text-dark-color text-xl'>
				No items in the cart :(
			</span>
		</Flex>
	)
}

export default Cart
