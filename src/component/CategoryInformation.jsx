import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"
import { toast } from "react-toastify"
import Button from "./Button"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"

const CategoryInformation = ({ id }) => {
	let [categoryName, setCategoryName] = useState("")
	let [categoryType, setCategoryType] = useState("")

	let [active, setActive] = useState(false)

	let [nameError, setNameError] = useState(false)
	let [typeError, setTypeError] = useState(false)

	let [categoryData, setCategoryData] = useState([])

	let [loading, setLoading] = useState(false)
	let [dataLoading, setDataLoading] = useState(false)

	let [updateIndex, setUpdateIndex] = useState(null)
	let [updatedName, setUpdatedName] = useState("")

	let [refresh, setRefresh] = useState(false)

	function setErrorsToFalse() {
		setNameError(false)
		setTypeError(false)
	}

	function setValuesToDefault() {
		setCategoryName("")
		setCategoryType("")
		setActive(false)
	}

	let handleAdd = (e) => {
		e.preventDefault()

		if (!categoryName) {
			setErrorsToFalse()
			setNameError(true)
			toast.error("Must give the name of the category")
			return
		}

		if (!categoryType || categoryType == "None") {
			setErrorsToFalse()
			setTypeError(true)
			toast.error("Must set the type of the category")
			return
		}

		setErrorsToFalse()
		setLoading(true)

		axios
			.post("http://localhost:3000/api/v1/category/add_category", {
				categoryName,
				categoryType,
				activeStatus: active,
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					setLoading(false)
					setValuesToDefault()
					if (data.success) {
						toast.success(data.message)
						setRefresh(!refresh)
					} else {
						toast.error(data.message)
						console.log(data.data.error)
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	let deleteCategory = (id) => {
		axios
			.delete("http://localhost:3000/api/v1/category/delete_data", {
				data: { id },
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						setRefresh(!refresh)
					} else {
						toast.error(data.message)
						console.log(data.data.error)
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	let changeName = (id, previousName, index) => {
		axios
			.post("http://localhost:3000/api/v1/category/update_data", {
				id,
				data: { categoryName: updatedName ? updatedName : previousName },
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						setUpdateIndex(null)
						setUpdatedName("")
						setRefresh(!refresh)
					} else {
						toast.error(data.message)
						console.log(data.data.error)
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	let changeActive = (id, status, index) => {
		const tempData = categoryData

		tempData[index].activeStatus = !status
		setCategoryData(tempData)

		axios
			.post("http://localhost:3000/api/v1/category/update_data", {
				id,
				data: { activeStatus: !status },
			})
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						setRefresh(!refresh)
					} else {
						toast.error(data.message)
						console.log(data.data.error)
					}
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	useEffect(() => {
		if (categoryData.length == 0) {
			setDataLoading(true)
		}
		axios
			.get("http://localhost:3000/api/v1/category/get_all_data")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.success) {
						setCategoryData(data.data)
						setDataLoading(false)
					} else {
						toast.error(data.message)
						console.log(data.data.error)
						setDataLoading(false)
					}
				}
			})
			.catch((error) => {
				console.log(error)
				setDataLoading(false)
			})
	}, [refresh])

	return (
		<Flex className='flex flex-col w-full'>
			{id == "1" ? (
				<Flex className={"flex flex-col"}>
					<h2 className='font-DM-sans font-semibold text-2xl text-text-dark-color py-3'>
						All Category
					</h2>
					<List
						className={
							"border-t-2 border-b-2 border-light-background-color justify-start gap-16 font-DM-sans font-semibold text-sm text-text-dark-color px-2 py-3 mt-5"
						}
					>
						<ListItem className={"w-[180px]"}>Category Name</ListItem>
						<ListItem className={"w-[100px]"}>Category Type</ListItem>
						<ListItem className={"w-[100px]"}>Total Products</ListItem>
						<ListItem className={"w-[100px] justify-center"}>Active status</ListItem>
						<ListItem className={"w-[200px] justify-center"}>Action</ListItem>
					</List>

					{dataLoading ? (
						<Flex className={"w-full justify-center py-20"}>
							<TailSpin
								visible={dataLoading}
								height='80'
								width='80'
								color={"#262626"}
								ariaLabel='tail-spin-loading'
								radius='1'
							></TailSpin>
						</Flex>
					) : (
						<List
							className={
								" font-DM-sans text-sm text-text-dark-color pt-4 mt-2 flex flex-col"
							}
						>
							{categoryData.map((data, index) => (
								<ListItem className={""}>
									<List
										className={`justify-start gap-16 ${
											index % 2 == 0 ? "bg-light-background-color" : "bg-none"
										}  p-2 relative after:absolute after:w-full after:h-full after:hover:bg-black/10 after:duration-200 after:top-0 after:left-0 items-center`}
									>
										<ListItem className={"w-[180px]"}>
											{updateIndex == index ? (
												<input
													type={"text"}
													className={`w-[180px] relative z-10 focus:outline-none py-1 px-2 border-2 placeholder:font-DM-sans placeholder:font-semibold text-text-dark-color
                        border-[#e2e2e2]
                      `}
													placeholder={data.categoryName}
													value={updatedName}
													onChange={(e) => {
														setUpdatedName(e.target.value)
													}}
												></input>
											) : (
												data.categoryName
											)}
										</ListItem>
										<ListItem className={"w-[100px]"}>{data.categoryType}</ListItem>
										<ListItem className={"w-[100px] justify-center"}>
											{data.products == null ? "0" : "10"}
										</ListItem>
										<ListItem className={"w-[100px] justify-center"}>
											<div
												className={`w-10 h-4  rounded-full relative after:absolute after:w-5 after:h-5  after:border-[2px] after:border-text-light-color after:rounded-full ${
													data.activeStatus
														? "after:left-[100%] after:-translate-x-[100%] after:bg-green-400 bg-green-600 after:border-green-400"
														: "after:left-0 bg-gray-400 after:bg-white"
												} after:top-1/2 after:-translate-y-1/2 after:duration-200 hover:cursor-pointer z-10`}
												onClick={() => changeActive(data._id, data.activeStatus, index)}
											></div>
										</ListItem>
										<ListItem className={"w-[200px] justify-center"}>
											{updateIndex == index ? (
												<Flex className={"flex gap-3"}>
													<button
														className={`px-4 py-[6px] relative z-10 bg-green-300 hover:bg-green-400 font-DM-sans font-semibold text-sm text-text-dark-color duration-300`}
														onClick={() => {
															changeName(data._id, data.categoryName, index)
														}}
													>
														Confirm
													</button>

													<button
														className={`px-4 py-[6px] relative z-10 bg-red-300 hover:bg-red-400 font-DM-sans font-semibold text-sm text-text-dark-color duration-300 `}
														onClick={() => {
															setUpdateIndex(null)
															setUpdatedName("")
														}}
													>
														Cancel
													</button>
												</Flex>
											) : (
												<Flex className={"flex gap-3"}>
													<button
														className={`px-4 py-[6px] relative z-10 bg-green-300 hover:bg-green-400 font-DM-sans font-semibold text-sm text-text-dark-color duration-300`}
														onClick={() => {
															setUpdateIndex(index)
														}}
													>
														Update
													</button>

													<button
														className={`px-4 py-[6px] relative z-10 bg-red-300 hover:bg-red-400 font-DM-sans font-semibold text-sm text-text-dark-color duration-300 `}
														onClick={() => {
															deleteCategory(data._id)
														}}
													>
														Delete
													</button>
												</Flex>
											)}
										</ListItem>
									</List>
								</ListItem>
							))}
						</List>
					)}
				</Flex>
			) : id == "2" ? (
				<div>
					<h2 className='font-DM-sans font-semibold text-2xl text-text-dark-color py-3'>
						Add Category
					</h2>
					<form className='w-full mt-10'>
						<Flex className={"flex gap-8"}>
							<Flex
								className={
									"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-3"
								}
							>
								<Flex className={"items-center gap-2"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Category Name
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<input
									type={"text"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										nameError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"Category Name"}
									value={categoryName}
									onChange={(e) => {
										setCategoryName(e.target.value)
									}}
								></input>

								<Flex className={"items-center gap-7 mt-10"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Set Active
									</span>

									<div
										className={`w-16 h-[25px]  rounded-lg relative after:absolute after:w-7 after:h-[28px]  after:border-[2px] after:border-text-light-color after:rounded-md ${
											active
												? "after:left-[100%] after:-translate-x-[100%] after:bg-green-400 bg-green-600 after:border-green-400"
												: "after:left-0 bg-gray-400 after:bg-white"
										} after:top-1/2 after:-translate-y-1/2 after:duration-200 hover:cursor-pointer z-10`}
										onClick={() => {
											setActive(!active)
										}}
									></div>
								</Flex>

								<Button
									className={"mt-12 w-fit"}
									onClick={(e) => handleAdd(e)}
									loading={loading}
								>
									Add Category
								</Button>
							</Flex>

							<Flex
								className={
									"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-3"
								}
							>
								<Flex className={"items-center gap-2"}>
									<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
										Category Type
									</span>
									<span className='text-red-400 text-xl'>*</span>
								</Flex>
								<select
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										typeError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									value={categoryType}
									onChange={(e) => {
										setCategoryType(e.target.value)
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
					</form>
				</div>
			) : id == "3" ? (
				""
			) : (
				""
			)}
		</Flex>
	)
}

export default CategoryInformation
