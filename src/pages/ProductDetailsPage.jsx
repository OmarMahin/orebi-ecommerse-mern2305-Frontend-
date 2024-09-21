import React, { useEffect, useState } from "react"
import Container from "../component/Container"
import Flex from "../component/Flex"
import Image from "../component/Image"
import Button from "../component/Button"
import BackButton from "../component/BackButton"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import GiveReview from "../component/GiveReview"
import Rating from "react-rating"
import { FaRegStar } from "react-icons/fa"
import { FaStarHalfAlt } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import IncrementDecrement from "../component/IncrementDecrement"
import { toast } from "react-toastify"

const ProductDetailsPage = () => {
	const { id } = useParams()
	const navigation = useNavigate()

	const [product, setProduct] = useState({})
	const [productRatings, setProductRatings] = useState(0)
	const [productQuantity, setProductQuantity] = useState(1)
	const [loggedIn, setLoggedIn] = useState(false)
	const [refresh, setRefresh] = useState(false)
	const [cartButtonLoading, setCartButtonLoading] = useState(false)
	const [userId, setUserId] = useState("")
	const [productAdded, setProductAdded] = useState(false)

	const addToCart = (product) => {
		if (!loggedIn) {
			navigation("/login")
			return
		}
		setCartButtonLoading(true)
		axios
			.post(`http://localhost:3000/api/v1/cart/add_to_cart`, {
				user: userId,
				productId: product._id,
				productName: product.productName,
				productQuantity: productQuantity,
				productPrice: product.productPrice,
				productImage: product.productImage,
				productAvailibility: product.productQuantity,
				productLink: window.location.href,
			})
			.then((respone) => {
				if (respone.status == "200") {
					toast.success("Product Added To The Cart")
					setCartButtonLoading(false)
					setRefresh(!refresh)
					setProductAdded(true)
				}
			})
			.catch((error) => {
				toast.error("An error occurred")
				console.log(error)
				setCartButtonLoading(false)
			})
	}

	useEffect(() => {
		console.log("Refreshed")
		axios
			.get("http://localhost:3000/api/v1/verify/authorize_user")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (!loggedIn && data.authorized) {
						setLoggedIn(true)
						setUserId(data.data.id)
						axios
							.get(`http://localhost:3000/api/v1/cart/get_products/${data.data.id}`)
							.then((response) => {
								if (response.status == "200") {
									const data = response.data
									if (
										data.success &&
										data.data.some((product) => product.productId === id)
									) {
										setProductAdded(true)
									}
								}
							})
					} else if (loggedIn && !data.authorized) {
						setLoggedIn(false)
					}
				}
			})
			.catch((err) => {
				console.log(err)
				setLoggedIn(false)
			})

		axios
			.post("http://localhost:3000/api/v1/product/find_product", { id })
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (!data.success) {
						navigation("*")
					} else {
						setProduct(data.data)
						if (data.data.totalReviews != 0) {
							const productDetails = data.data
							console.log(productDetails)
							setProduct(productDetails)
							setProductRatings(
								(productDetails.totalRatings / productDetails.totalReviews).toFixed(1)
							)
						}
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})

		setTimeout(() => {
			setRefresh(!refresh)
		}, 120000)
	}, [refresh])

	return (
		<Container>
			<Flex className={"flex flex-col w-[90%] mx-auto mt-10"}>
				<BackButton></BackButton>
				<Flex className={"flex gap-3 pb-10 mb-3 border-b-[1px] border-[#dbdbdb] mt-5"}>
					<div className='w-[60%] h-[400px] relative'>
						<Image
							src={product?.productImage}
							alt={"product image"}
							className={
								"h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
							}
						></Image>
					</div>

					<Flex className='w-[40%] font-DM-sans font-bold text-text-dark-color gap-6 flex flex-col'>
						<h1 className='text-3xl'>{product?.productName}</h1>
						<h3 className='text-2xl font-semibold'>{`${product?.productPrice}৳`}</h3>

						<Flex className={"flex gap-2"}>
							<span className='font-normal'>Avaibility: </span>
							<span className='font-semibold'>{product?.productQuantity}</span>
						</Flex>
						<IncrementDecrement
							value={productQuantity}
							onChange={(e) => {
								setProductQuantity(e)
							}}
							available={product?.productQuantity}
						></IncrementDecrement>
						<Flex className={"flex items-center"}>
							<Rating
								initialRating={productRatings}
								readonly
								emptySymbol={<FaRegStar className='text-yellow-500' />}
								fullSymbol={<FaStar className='text-yellow-500' />}
								fractions={2}
							></Rating>
							<span className='font-normal'>({productRatings})</span>
						</Flex>
						<span className='font-normal'>{`Made in ${product?.productOrigin}`}</span>
						<Flex className={"flex gap-3"}>
							{!productAdded ? (
								<Button
									className={"w-fit"}
									onClick={() => {
										addToCart(product)
									}}
									loading={cartButtonLoading}
								>
									Add to cart
								</Button>
							) : (
								<Link to={"/cart"}>
									<Button className={"w-fit"}>See cart</Button>
								</Link>
							)}
							<Button className={"w-fit"}>Add to wishlist</Button>
						</Flex>
					</Flex>
				</Flex>
				<Flex className={"flex flex-col gap-7 my-10"}>
					<h2 className='font-DM-sans font-bold text-text-dark-color text-3xl'>Description</h2>
					<div
						className='font-DM-sans font-normal text-text-dark-color text-lg'
						dangerouslySetInnerHTML={{ __html: product?.productDescription }}
					></div>
				</Flex>
				<GiveReview productId={product._id}></GiveReview>
			</Flex>
		</Container>
	)
}

export default ProductDetailsPage
