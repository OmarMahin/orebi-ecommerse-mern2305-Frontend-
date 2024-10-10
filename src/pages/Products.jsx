import React from "react"
import Breadcrumb from "../component/Breadcrumb"
import Container from "../component/Container"
import Flex from "../component/Flex"
import ShopByBrand from "../component/ShopByBrand"
import ShopByCategory from "../component/ShopByCategory"
import ShopByColor from "../component/ShopByColor"
import ShopByPrice from "../component/ShopByPrice"
import { LuLayoutGrid } from "react-icons/lu"
import { CgLayoutList } from "react-icons/cg"
import ProductsItem from "../component/ProductsItem"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import LoadingSkeletion from "../component/LoadingSkeletion"
import { Helmet } from "react-helmet-async"

const Products = () => {
	let [productsData, setProductsData] = useState(null)
	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/product/get_all_products")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						setProductsData(data.data)
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<Container>
			<Helmet>
				<title>Products-Orebi Ecommerse</title>
				<meta name="description" content="Products" />
				<link rel="canonical" href="https://orebiecommerse2305.netlify.app/products" />	
			</Helmet>
			<Breadcrumb></Breadcrumb>

			<Flex className={"mt-32 gap-10"}>
				<div className='w-[20%]'>
					<ShopByCategory></ShopByCategory>
					<ShopByColor></ShopByColor>
					<ShopByBrand></ShopByBrand>
					<ShopByPrice></ShopByPrice>
				</div>
				<div className='w-[80%]'>
					<div>
						<Flex className={"justify-between"}>
							<div>
								<Flex>
									<LuLayoutGrid className='border-2 border-[#F0F0F0] text-[#737373] w-7 h-7 p-1 hover:border-text-dark-color hover:text-[#F0F0F0] hover:bg-text-dark-color duration-300 hover:cursor-pointer mr-5' />
									<CgLayoutList className='border-2 border-[#F0F0F0] text-[#737373] w-7 h-7 p-[1px] hover:border-text-dark-color hover:text-[#F0F0F0] hover:bg-text-dark-color duration-300 hover:cursor-pointer' />
								</Flex>
							</div>
							<div>
								<Flex>
									<Flex className={"items-center mr-10"}>
										<h3 className=' text-text-light-color font-DM-sans mr-4'>Sort by:</h3>
										<select
											id='countries'
											className='bg-white border border-[#F0F0F0] text-text-light-color text-sm py-2 pl-5 pr-36'
										>
											<option selected=''>Featured</option>
											<option value='US'>United States</option>
											<option value='CA'>Canada</option>
											<option value='FR'>France</option>
											<option value='DE'>Germany</option>
										</select>
									</Flex>

									<Flex className={"items-center"}>
										<h3 className=' text-text-light-color font-DM-sans mr-4'>Show:</h3>
										<select
											id='countries'
											className='bg-white border border-[#F0F0F0] text-text-light-color text-sm py-2 pl-5 pr-6'
										>
											<option selected=''>36</option>
											<option value='US'>United States</option>
											<option value='CA'>Canada</option>
											<option value='FR'>France</option>
											<option value='DE'>Germany</option>
										</select>
									</Flex>
								</Flex>
							</div>
						</Flex>
					</div>
					<section className='mt-16 w-full'>
						{productsData ? (
							<Flex className={"flex-wrap gap-y-12 gap-x-20"}>
								{productsData.map((data) => (
									<ProductsItem
										productId={data._id}
										productImg={data.productImage}
										productName={data.productName}
										productPrice={data.productPrice}
										productQuantity={data.productQuantity}
										newItem={true}
									></ProductsItem>
								))}
							</Flex>
						) : (
							<Flex className={"flex-wrap gap-y-12 gap-x-20 w-full"}>
								<LoadingSkeletion></LoadingSkeletion>
								<LoadingSkeletion></LoadingSkeletion>
							</Flex>
						)}
					</section>
				</div>
			</Flex>
		</Container>
	)
}

export default Products
