import React, { useEffect, useState } from "react"
import Flex from "./Flex"
import Button from "./Button"
import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill"
import { fileToBase64 } from "../helpers/fileToBase64"
import { toast } from "react-toastify"
import axios from "axios"

const ProductInformation = ({ id }) => {
	const [productName, setProductName] = useState("")
	const [productType, setProdcutType] = useState("")
	const [productDescription, setProductDescription] = useState("")
	const [shop, setShop] = useState("")
	const [category, setCategory] = useState("")
	const [productImage, setProductImage] = useState(null)
	const [productPrice, setProductPrice] = useState("")
	const [productOrigin, setProductOrigin] = useState("")
	const [productQuantity, setProductQuantity] = useState("")
	const [productImageFile, setProductImageFile] = useState(null)

	const [categoryList, setCategoryList] = useState([])
	const [shopList, setShopList] = useState([])

	const [categoryError, setCategoryError] = useState(false)
	const [productTypeError, setProductTypeError] = useState(false)
	const [descriptionError, setDescriptionError] = useState(false)
	const [quantityError, setQuantityError] = useState(false)
	const [priceError, setPriceError] = useState(false)
	const [originError, setOriginError] = useState(false)
	const [shopError, setShopError] = useState(false)
	const [imageError, setImageError] = useState(false)
	const [nameError, setNameError] = useState(false)

	const [refresh, setRefresh] = useState(false)
	const [loading, setLoading] = useState(false)

	const addProduct = (e) => {
		e.preventDefault()
		setLoading(true)
		const productFormData = new FormData()
		productFormData.append(
			"productData",
			JSON.stringify({
				productName,
				productType,
				productDescription,
				productShop: shop,
				productCategory: category,
				productPrice: Number(productPrice),
				productOrigin,
				productQuantity: Number(productQuantity),
			})
		)
		productFormData.append("productImage", productImageFile)

		axios
			.post("http://localhost:3000/api/v1/product/add_product", productFormData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						toast.success(data.message)
						setRefresh(!refresh)
						setLoading(false)
					} else {
						toast.error(data.message)
						console.log(data.data.error)
						setLoading(false)
					}
				}
			})
			.catch((error) => {
				setLoading(false)
				console.log(error)
			})
	}

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/product/get_category_shops")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						setCategoryList(data.data.categories)
						setShopList(data.data.shops)
						// setDataLoading(false)
					} else {
						toast.error(data.message)
						console.log(data.data.error)
						// setDataLoading(false)
					}
				}
			})
			.catch((error) => {
				console.log(error)
				// setDataLoading(false)
			})
	}, [refresh])

	return (
		<Flex className='flex flex-col w-full h-[500px]' id={id}>
			{id == "1" ? (
				<Flex className={"flex flex-col h-full"}>
					<h2 className='font-DM-sans font-semibold text-2xl text-text-dark-color py-3'>
						Create Product
					</h2>
					<form className='w-full mt-10 overflow-y-scroll h-full pb-20'>
						<Flex className={"flex gap-4"}>
							<Flex className={"flex-col gap-10"}>
								<Flex className={"items-center gap-2"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Product Image
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<input
									type='file'
									accept='image/*'
									onChange={(e) => {
										fileToBase64(e.target.files[0])
											.then((res) => {
												setProductImage(res)
												setProductImageFile(e.target.files[0])
											})
											.catch((err) => {
												toast.error("Something went wrong")
												console.log(err)
											})
									}}
								/>
							</Flex>
							<Flex className={"w-40 h-40 border-[1px] border-slate-300/90"}>
								{productImage ? (
									<img className='w-full h-full' src={productImage}></img>
								) : (
									<div className='w-full h-full'></div>
								)}
							</Flex>
						</Flex>
						<Flex className={"flex gap-8 mt-10"}>
							<Flex
								className={
									"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-3"
								}
							>
								<Flex className={"items-center gap-2"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Product Name
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<input
									type={"text"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										nameError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"Product Name"}
									value={productName}
									onChange={(e) => {
										setProductName(e.target.value)
									}}
								></input>
							</Flex>

							<Flex
								className={
									"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-3"
								}
							>
								<Flex className={"items-center gap-2"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Product Type
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<select
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										productTypeError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									value={productType}
									onChange={(e) => {
										setProdcutType(e.target.value)
									}}
								>
									<option>None</option>
									<option>Electronics</option>
									<option>Appliances</option>
									<option>Food</option>
									<option>Clothes</option>
								</select>
							</Flex>
						</Flex>
						<Flex className={"flex flex-col gap-4 h-fit"}>
							<Flex className={"items-center gap-2 mt-10"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Product Description
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<Flex className='h-40 w-full'>
								<ReactQuill
									theme='snow'
									value={productDescription}
									onChange={(e) => {
										setProductDescription(e)
									}}
									className='w-full h-full'
								/>
							</Flex>
						</Flex>

						<Flex className={"flex gap-8 mt-20"}>
							<Flex
								className={
									"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-3"
								}
							>
								<Flex className={"items-center gap-2"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Category
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<select
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										categoryError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									value={category}
									onChange={(e) => {
										setCategory(e.target.value)
									}}
								>
									<option key={-1} value={""}>
										None
									</option>
									{categoryList &&
										categoryList.map((item, index) => (
											<option key={index} value={item._id}>
												{item.categoryName}
											</option>
										))}
								</select>

								<Flex className={"items-center gap-2 mt-10"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Product Price
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<input
									type={"text"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										priceError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"Product Price"}
									value={productPrice}
									onChange={(e) => {
										setProductPrice(e.target.value)
									}}
								></input>

								<Flex className={"items-center gap-2 mt-10"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Product Quantity
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<input
									type={"text"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										quantityError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"Product Quantity"}
									value={productQuantity}
									onChange={(e) => {
										setProductQuantity(e.target.value)
									}}
								></input>

								<Button className={"w-fit mt-20"} loading={loading} onClick={addProduct}>
									Add Product
								</Button>
							</Flex>

							<Flex
								className={
									"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-3"
								}
							>
								<Flex className={"items-center gap-2"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Shop
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<select
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										shopError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									value={shop}
									onChange={(e) => {
										setShop(e.target.value)
									}}
								>
									<option>None</option>
									{shopList &&
										shopList.map((item, index) => (
											<option key={index} value={item._id}>
												{item.shopName}
											</option>
										))}
								</select>

								<Flex className={"items-center gap-2 mt-10"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Product Origin
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<input
									type={"text"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										originError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"Product Origin"}
									value={productOrigin}
									onChange={(e) => {
										setProductOrigin(e.target.value)
									}}
								></input>
							</Flex>
						</Flex>
					</form>
				</Flex>
			) : (
				""
			)}
		</Flex>
	)
}

export default ProductInformation
