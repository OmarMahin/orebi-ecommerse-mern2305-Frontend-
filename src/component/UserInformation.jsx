import React from "react"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"
import Button from "./Button"
import Flex from "./Flex"
import List from "./List"
import ListItem from "./ListItem"

const UserInformation = ({ id }) => {
	let [userId, setUserId] = useState("")
	let [loading, setLoading] = useState(false)
	let [showUserInformation, setShowUserInformation] = useState(false)

	let [_userId, _setUserId] = useState("")
	let [userFname, setUserFname] = useState("")
	let [userLname, setUserLname] = useState("")
	let [userEmail, setUserEmail] = useState("")
	let [userMemberType, setUserMemberType] = useState("")

	let [updatedUserFname, setUpdatedUserFname] = useState("")
	let [updatedUserLname, setUpdatedUserLname] = useState("")
	let [updatedUserEmail, setUpdatedUserEmail] = useState("")
	let [updatedUserMemberType, setUpdatedUserMemberType] = useState("")

	let userData = [
		{
			_id: 1239219803709290,
			first_name: "Md.Omar",
			last_name: "Karim",
			name: "Md.Omar Karim",
			email: "okmahin2@gmail.com",
			memberType: "admin",
		},
		{
			_id: 1239219804709300,
			first_name: "Md.Omar",
			last_name: "Karim",
			name: "Md.Omar Karim",
			email: "okmahin66@gmail.com",
			memberType: "customer",
		},
		{
			_id: 1239219804709200,
			first_name: "Md.Omar",
			last_name: "Karim",
			name: "Md.Omar Karim",
			email: "okmahin2@gmail.com",
			memberType: "customer",
		},
	]

	let findUserById = (user_id) => {
		setUserId("")
		setLoading(true)
		let flag = null
		userData.map((data, index) => {
			if (data._id == user_id) flag = index
		})
		if (flag != null) {
			setShowUserInformation(true)
			const user = userData[flag]
            _setUserId(user._id)
			setUserFname(user.first_name)
			setUserLname(user.last_name)
			setUserEmail(user.email)
			setUserMemberType(user.memberType)
		} else {
			setShowUserInformation(false)
		}

		setLoading(false)
	}

    let handleUpdate = ()=>{

    }

	return (
		<Flex className={"w-full flex flex-col items-start"}>
			<h2 className='font-DM-sans font-semibold text-2xl text-text-dark-color py-3'>Users</h2>
			{id == "1" ? (
				<div>
					<List
						className={
							"border-t-2 border-b-2 border-light-background-color justify-between gap-20 font-DM-sans text-lg text-text-dark-color p-3"
						}
					>
						<ListItem className={"w-[180px]"}>User Id</ListItem>
						<ListItem className={"w-[180px]"}>User Name</ListItem>
						<ListItem className={"w-[180px]"}>Email</ListItem>
						<ListItem className={"w-[100px] justify-center"}>User Type</ListItem>
					</List>

					<List className={" font-DM-sans text-text-dark-color pt-4 mt-2 flex flex-col"}>
						{userData.map((data, index) => (
							<ListItem>
								<List
									className={`justify-between gap-20 ${
										index % 2 == 0 ? "bg-light-background-color" : "bg-none"
									}  p-2 relative after:absolute after:w-full after:h-full after:hover:bg-black/10 after:duration-200 after:top-0 after:left-0`}
								>
									<ListItem className={"w-[180px] relative z-10"}>{data._id}</ListItem>
									<ListItem className={"w-[180px]"}>{data.name}</ListItem>
									<ListItem className={"w-[180px]"}>{data.email}</ListItem>
									<ListItem className={"w-[100px] justify-center"}>
										{data.memberType}
									</ListItem>
								</List>
							</ListItem>
						))}
					</List>
				</div>
			) : (
				<div className='w-full'>
					<Flex className={"flex flex-col gap-8"}>
						<Flex className={"items-center gap-8"}>
							<span className='font-DM-sans font-semibold text-lg text-text-dark-color'>
								User Id:
							</span>
							<input
								type={"text"}
								className={`w-48 focus:outline-none py-1 px-2 border-2 rounded-lg placeholder:font-DM-sans placeholder:font-semibold text-text-light-color
									border-[#e2e2e2]
								`}
								value={userId}
								onChange={(e) => {
									setUserId(e.target.value)
								}}
							></input>
							<button
								className={`py-1 px-2 border-2 border-text-dark-color text-text-dark-color font-DM-sans font-bold text-sm hover:bg-text-dark-color hover:text-white duration-200 w-20`}
								onClick={() => {
									findUserById(userId)
								}}
							>
								Find
							</button>
						</Flex>
						<Flex className={`border-t-2 border-light-background-color w-full`}>
							{loading ? (
								<Flex className={"mx-auto py-20"}>
									<TailSpin
										visible={loading}
										height='80'
										width='80'
										color={"#262626"}
										ariaLabel='tail-spin-loading'
										radius='1'
									></TailSpin>
								</Flex>
							) : showUserInformation ? (
								<Flex className={'flex-col w-full'}>
                                    <span className="font-DM-sans font-semibold text-text-dark-color text-lg py-3 mb-4">User Id: {_userId}</span>
                                    <Flex className={"w-full gap-5"}>
									<Flex className={"w-1/2 flex-col gap-10"}>
										

										<Flex className={"flex flex-col w-1/2"}>
											<span className='font-DM-sans font-bold text-lg text-text-dark-color'>
												First Name
											</span>
											<input
												type={"text"}
												className={`w-full focus:outline-none py-2 border-b-2 placeholder:font-DM-sans border-[#e2e2e2] text-text-dark-color font-DM-sans
										`}
												placeholder={userFname}
												value={updatedUserFname}
												onChange={(e) => {
													setUpdatedUserFname(e.target.value)
												}}
											></input>
										</Flex>

										<Flex className={"flex flex-col w-1/2"}>
											<span className='font-DM-sans font-bold text-lg text-text-dark-color'>
												User Email
											</span>
											<input
												type={"email"}
												className={`w-full focus:outline-none py-2 border-b-2 placeholder:font-DM-sans border-[#e2e2e2] text-text-dark-color font-DM-sans
										`}
												placeholder={userEmail}
												value={updatedUserEmail}
												onChange={(e) => {
													setUpdatedUserEmail(e.target.value)
												}}
											></input>
										</Flex>
										<Flex
											className={
												""
											}
										>
											<Button
												disabled={
													updatedUserEmail ||
													updatedUserFname ||
													updatedUserLname ||
													updatedUserMemberType
														? false
														: true
												}
                                                onClick = {handleUpdate}
											>
												Update
											</Button>
										</Flex>
									</Flex>
									<Flex className={"w-1/2 flex-col gap-10"}>
										<Flex className={"flex flex-col w-1/2"}>
											<span className='font-DM-sans font-bold text-lg text-text-dark-color'>
												Last Name
											</span>
											<input
												type={"text"}
												className={`w-full focus:outline-none py-2 border-b-2 placeholder:font-DM-sans border-[#e2e2e2] text-text-dark-color font-DM-sans
										`}
												placeholder={userLname}
												value={updatedUserLname}
												onChange={(e) => {
													setUpdatedUserLname(e.target.value)
												}}
											></input>
										</Flex>

										<Flex className={"flex flex-col w-1/2"}>
											<span className='font-DM-sans font-bold text-lg text-text-dark-color'>
												Member Type
											</span>

											<select
												className={`w-full focus:outline-none py-2 border-b-2 placeholder:font-DM-sans border-[#e2e2e2] text-text-light-color font-DM-sans
										`}
												defaultValue={userMemberType}
												onChange={(e) => {
													setUpdatedUserMemberType(e.target.value)
												}}
											>
												<option>customer</option>
												<option>admin</option>
												<option>merchant</option>
											</select>
										</Flex>
                                        </Flex>
									</Flex>
								</Flex>
							) : (
								<span className='font-DM-sans font-semibold text-2xl text-text-light-color py-20 mx-auto'>
									No User Information
								</span>
							)}
						</Flex>
					</Flex>
				</div>
			)}
		</Flex>
	)
}

export default UserInformation
