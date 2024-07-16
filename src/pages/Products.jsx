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

const Products = () => {
  let [productsData, setProductsData] = useState([])
  useEffect(()=>{
    function getProducts(){
      axios.get("https://dummyjson.com/products").then((data)=>{
        setProductsData(data.data.products)
      })
    }

    getProducts()
  },[])

	return (
		<Container>
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
					<section className="mt-16">
						<Flex className={'flex-wrap gap-y-12 justify-between'}>
							{
                productsData.map((data) => (
                  <ProductsItem
                    productImg= {data.thumbnail}
                    productName={data.title}
                    productPrice='$44.00'
                    productColor='Black'
                    newItem={true}
                  ></ProductsItem>

                ))

                
              }
							
						</Flex>
					</section>
				</div>
			</Flex>
		</Container>
	)
}

export default Products
