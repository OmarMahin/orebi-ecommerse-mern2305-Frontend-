import React from "react"
import Button from "./Button"
import Flex from "./Flex"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import emailValidation from "../helpers/emailValidation"

const OTP_Send = () => {
	let [email, setEmail] = useState("")
	let [otp, setOTP] = useState("")
	let [otpSend, setOtpSend] = useState(false)

	let [emailError, setEmailError] = useState(false)
	let [otpError, setOtpError] = useState(false)

	function errorsToFalse() {
		setEmailError(false)
		setOtpError(false)
	}

	let handleSubmit = (e) => {
		e.preventDefault()

		if (!email) {
			errorsToFalse()
			setEmailError(true)
			toast.error("Please input your email")
			return
		}

		if (!emailValidation(email)) {
			errorsToFalse()
			setEmailError(true)
			toast.error("Invalid email")
			return
		}

		if (!otp && otpSend) {
			errorsToFalse()
			setOtpError(true)
			toast.error("Please input your OTP")
			return
		}

		setOtpSend(true)
	}

	return (
		<Flex className={" mt-12 mb-28 w-full"}>
			<form className='w-[60%]'>
				<Flex className={"flex flex-col gap-16"}>
					<h2 className='font-DM-sans font-bold text-4xl text-text-dark-color pt-12 border-light-background-color border-t-2 flex flex-col'>
						Forget Password
					</h2>
					<Flex className={"mt-10 justify-start w-full gap-10"}>
						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Email Address
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							{!otpSend ?
							<input
								type={"email"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
									emailError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"Email address"}
								onChange={(e) => {
									setEmail(e.target.value)
								}}
							></input>
							:
							<input
								type={"email"}
								className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold cursor-no-drop ${
									emailError ? "border-red-500" : "border-[#e2e2e2]"
								}`}
								placeholder={"Email address"}
								disabled
								onChange={(e) => {
									setEmail(e.target.value)
								}}
							></input>
							}

							<Button className={"mt-12"} onClick={handleSubmit}>
								{otpSend ? "Confirm" : "Send OTP"}
							</Button>
						</Flex>

						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									OTP
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							{otpSend ?
								<input
									type={"text"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										otpError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"OTP"}
									onChange={(e) => {
										setOTP(e.target.value)
									}}
								></input>
								:
								<input
									type={"text"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold cursor-no-drop ${
										otpError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									disabled
									placeholder={"OTP"}
									onChange={(e) => {
										setOTP(e.target.value)
									}}
								></input>
							}
							
							
						</Flex>
					</Flex>
				</Flex>
			</form>
		</Flex>
	)
}

export default OTP_Send
