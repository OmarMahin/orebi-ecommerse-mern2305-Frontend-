import React from "react"
import Button from "./Button"
import Flex from "./Flex"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"

const OTP_Send = () => {
	let [showPass, setShowPass] = useState(false)
	let [email, setEmail] = useState("")
	let [otp, setOTP] = useState("")
	let [otpSend, setOtpSend] = useState(false)

	let handleShowPass = () => {
		setShowPass(!showPass)
	}
	return (
		<Flex
			className={
				"mx-auto my-20 items-center flex flex-col  w-[35%] border-[1px] border-gray-200 bg-light-background-color p-5 rounded-xl shadow-lg"
			}
		>
			<span className={"font-DM-sans text-text-dark-color text-lg font-bold"}>
				Please input your email for your OTP
			</span>
			<form className={"mt-10 mb-6 w-full relative z-10"}>
				<Flex
					className={
						"flex flex-col gap-6 items-center font-DM-sans font-semibold text-text-dark-color w-[90%] mx-auto"
					}
				>
					<input
						type={"email"}
						className={
							"border-text-light-color border-[1px] w-full py-3 px-6 rounded-lg placeholder:font-DM-sans placeholder:font-semibold"
						}
						placeholder={"Email"}
						onChange={(e) => {
							setEmail(e.email.value)
						}}
					></input>
					{!otpSend ? (
						<input
							type={"text"}
							className='border-text-light-color border-[1px] w-full py-3 px-6 rounded-lg placeholder:font-DM-sans placeholder:font-semibold bg-black/10 hover:cursor-no-drop'
							placeholder={"OTP"}
							value={otp}
							disabled
							onChange={(e) => {
								setOTP(e.otp.value)
							}}
						></input>
					) : (
						<input
							type={"text"}
							className='border-text-light-color border-[1px] w-full py-3 px-6 rounded-lg placeholder:font-DM-sans placeholder:font-semibold'
							placeholder={"OTP"}
							value={otp}
							onChange={(e) => {
								setOTP(e.otp.value)
							}}
						></input>
					)}
				</Flex>
			</form>
			{otpSend ? (
				<Button className={"mb-5 rounded-lg lg:text-[16px] px-5"}>Submit</Button>
			) : (
				<Button className={"mb-5 rounded-lg lg:text-[16px] px-5"}>Send OTP</Button>
			)}
		</Flex>
	)
}

export default OTP_Send
