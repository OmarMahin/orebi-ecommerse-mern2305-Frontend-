import React from "react"
import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa6"
import AdminPanelInformation from "./AdminPanelInformation"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"

const AdminPanel = () => {
	let [currentId, setCurrentId] = useState("1/1")
	let [showUsers, setShowUsers] = useState(false)
	let [showCategory, setShowCategory] = useState(false)
	let [showProducts, setShowProducts] = useState(false)

	let changeId = (e) => {
		setCurrentId(e.target.id)
	}

	return (
		<Flex className={"flex flex-col justify-center items-center"}>
			<h2 className='font-DM-sans font-semibold text-2xl text-text-dark-color my-6'>
				Admin Panel
			</h2>

			<Flex className={"w-[90%] gap-5"}>
				<Flex className={"bg-text-dark-color h-[500px]"}>
					<List className={"flex flex-col font-DM-sans text-white text-lg w-60"}>
						<div>
							<ListItem
								className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-full after:w-2 after:top-0 after:left-0 ${
									currentId[0] == "1" ? "after:bg-text-light-color" : "after:bg-none"
								} after:duration-300`}
								onClick={() => {
									setShowUsers(!showUsers)
								}}
							>
								<span>Users</span>
								{showUsers ? (
									<FaMinus className='p-[3px] mr-2'></FaMinus>
								) : (
									<FaPlus className='p-[3px] mr-2'></FaPlus>
								)}
							</ListItem>
							<List
								className={`flex flex-col ml-5 text-base ${
									showUsers ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
								} duration-300`}
							>
								<ListItem
									className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-2 after:w-2 after:top-1/2 after:-translate-y-1/2 after:left-0 ${
										currentId == "1/1" ? "after:bg-text-light-color" : "after:bg-none"
									} after:rounded-full after:duration-100`}
									id={"1/1"}
									onClick={changeId}
								>
									All users
								</ListItem>
								<ListItem
									className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-2 after:w-2 after:top-1/2 after:-translate-y-1/2 after:left-0 ${
										currentId == "1/2" ? "after:bg-text-light-color" : "after:bg-none"
									} after:rounded-full after:duration-100`}
									id={"1/2"}
									onClick={changeId}
								>
									Update users
								</ListItem>
							</List>
						</div>
						<div>
							<ListItem
								className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-full after:w-2 after:top-0 after:left-0 ${
									currentId[0] == "2" ? "after:bg-text-light-color" : "after:bg-none"
								} after:duration-300`}
								onClick={() => {
									setShowCategory(!showCategory)
								}}
							>
								<span>Category</span>
								{showCategory ? (
									<FaMinus className='p-[3px] mr-2'></FaMinus>
								) : (
									<FaPlus className='p-[3px] mr-2'></FaPlus>
								)}
							</ListItem>
							<List
								className={`flex flex-col ml-5 text-base ${
									showCategory ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
								} duration-300`}
							>
								<ListItem
									className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-2 after:w-2 after:top-1/2 after:-translate-y-1/2 after:left-0 ${
										currentId == "2/1" ? "after:bg-text-light-color" : "after:bg-none"
									} after:rounded-full after:duration-100`}
									id={"2/1"}
									onClick={changeId}
								>
									All category
								</ListItem>
								<ListItem
									className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-2 after:w-2 after:top-1/2 after:-translate-y-1/2 after:left-0 ${
										currentId == "2/2" ? "after:bg-text-light-color" : "after:bg-none"
									} after:rounded-full after:duration-100`}
									id={"2/2"}
									onClick={changeId}
								>
									Update category
								</ListItem>
							</List>
						</div>
						<div>
							<ListItem
								className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-full after:w-2 after:top-0 after:left-0 ${
									currentId[0] == "3" ? "after:bg-text-light-color" : "after:bg-none"
								} after:duration-300`}
								onClick={() => {
									setShowProducts(!showProducts)
								}}
							>
								<span>Products</span>
								{showProducts ? (
									<FaMinus className='p-[3px] mr-2'></FaMinus>
								) : (
									<FaPlus className='p-[3px] mr-2'></FaPlus>
								)}
							</ListItem>
							<List
								className={`flex flex-col ml-5 text-base ${
									showProducts ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
								} duration-300`}
							>
								<ListItem
									className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-2 after:w-2 after:top-1/2 after:-translate-y-1/2 after:left-0 ${
										currentId == "3/1" ? "after:bg-text-light-color" : "after:bg-none"
									} after:rounded-full after:duration-100`}
									id={"3/1"}
									onClick={changeId}
								>
									All products
								</ListItem>
								<ListItem
									className={`flex py-3 border-b-2 border-[#2D2D2D] pl-5 justify-between items-center cursor-pointer relative after:absolute after:h-2 after:w-2 after:top-1/2 after:-translate-y-1/2 after:left-0 ${
										currentId == "3/2" ? "after:bg-text-light-color" : "after:bg-none"
									} after:rounded-full after:duration-100`}
									id={"3/2"}
									onClick={changeId}
								>
									Update products
								</ListItem>
							</List>
						</div>
					</List>
				</Flex>
				<Flex className={" w-full"}>
                    <AdminPanelInformation id = {currentId}></AdminPanelInformation>
                </Flex>
			</Flex>
		</Flex>
	)
}

export default AdminPanel
