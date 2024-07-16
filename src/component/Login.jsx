import React from "react"
import Button from "./Button"
import Flex from "./Flex"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { useState } from "react"

const Login = ({ heading }) => {
	let [showPass, setShowPass] = useState(false)

	let handleShowPass = () => {
		setShowPass(!showPass)
	}
	return (
		<Flex
			className={
				"mx-auto my-20 items-center flex flex-col  w-[35%] border-[1px] border-gray-200 bg-light-background-color p-5 rounded-xl shadow-lg"
			}
		>
			<h2 className={"font-DM-sans text-text-dark-color text-2xl font-bold"}>{heading}</h2>
			<form className={"mt-10 mb-6 w-full"}>
				<Flex
					className={
						"flex flex-col gap-4 items-center font-DM-sans font-semibold text-text-dark-color"
					}
				>
					<input
						type={"email"}
						className={
							"border-text-light-color border-[1px] w-[90%] py-3 px-6 rounded-lg placeholder:font-DM-sans placeholder:font-semibold"
						}
						placeholder={"Email"}
					></input>
					<div className={"relative w-[90%]"}>
						<input
							type={showPass ? "text" : "password"}
							className={
								"border-text-light-color border-[1px] w-full py-3 px-6 rounded-lg placeholder:font-DM-sans placeholder:font-semibold"
							}
							placeholder={"Pasword"}
						></input>
						{!showPass ? (
							<FaEye
								className={"absolute top-1/2 right-3 -translate-y-1/2 text-text-dark-color hover:cursor-pointer"} onClick = {handleShowPass}
							/>
						) : (
							<FaEyeSlash
								className={"absolute top-1/2 right-3 -translate-y-1/2 text-text-dark-color hover:cursor-pointer"} onClick = {handleShowPass}
							/>
						)}
					</div>
				</Flex>
			</form>
			<Button className={"mb-5 rounded-lg text-[18px]"}>Log in</Button>
		</Flex>
	)
}

export default Login
