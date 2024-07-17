import React from "react"
import Button from "./Button"
import Flex from "./Flex"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"

const Change_Password = () => {
	let [showPass, setShowPass] = useState(false)
	let [showConfirmPass, setShowConfirmPass] = useState(false)
	let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

	let handleShowPass = () => {
		setShowPass(!showPass)
	}

	let handleShowConfirmPass = () => {
		setShowConfirmPass(!showPass)
	}
	return (
		<Flex
			className={
				"mx-auto my-20 items-center flex flex-col  w-[35%] border-[1px] border-gray-200 bg-light-background-color p-5 rounded-xl shadow-lg"
			}
		>
			<h2 className={"font-DM-sans text-text-dark-color text-2xl font-bold"}>Change Password</h2>
			<form className={"mt-10 mb-10 w-full"}>
				<Flex
					className={
						"flex flex-col gap-6 items-center font-DM-sans font-semibold text-text-dark-color"
					}
				>
					<div className={"relative w-[90%]"}>
						<input
							type={showPass ? "text" : "password"}
							className={
								"border-text-light-color border-[1px] w-full py-3 px-6 rounded-lg placeholder:font-DM-sans placeholder:font-semibold"
							}
							placeholder={"Pasword"}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
							}}
						></input>
						{password ? (
							!showPass ? (
								<FaEye
									className={
										"absolute top-1/2 right-3 -translate-y-1/2 text-text-dark-color hover:cursor-pointer"
									}
									onClick={handleShowPass}
								/>
							) : (
								<FaEyeSlash
									className={
										"absolute top-1/2 right-3 -translate-y-1/2 text-text-dark-color hover:cursor-pointer"
									}
									onClick={handleShowPass}
								/>
							)
						) : (
							""
						)}
					</div>
					<div className={"relative w-[90%]"}>
						<input
							type={showConfirmPass ? "text" : "password"}
							className={
								"border-text-light-color border-[1px] w-full py-3 px-6 rounded-lg placeholder:font-DM-sans placeholder:font-semibold"
							}
							placeholder={"Confirm Pasword"}
							value={confirmPassword}
							onChange={(e) => {
								setConfirmPassword(e.target.value)
							}}
						></input>
						{confirmPassword ? (
							!showConfirmPass ? (
								<FaEye
									className={
										"absolute top-1/2 right-3 -translate-y-1/2 text-text-dark-color hover:cursor-pointer"
									}
									onClick={handleShowPass}
								/>
							) : (
								<FaEyeSlash
									className={
										"absolute top-1/2 right-3 -translate-y-1/2 text-text-dark-color hover:cursor-pointer"
									}
									onClick={handleShowPass}
								/>
							)
						) : (
							""
						)}
					</div>
				</Flex>
			</form>
			<Button className={"mb-5 rounded-lg lg:text-[18px] w-[50%] px-2"}>Change password</Button>
		</Flex>
	)
}

export default Change_Password
