import React from "react"
import Button from "./Button"
import Flex from "./Flex"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const Change_Password = () => {
	let [showPass, setShowPass] = useState(false)
	let [showConfirmPass, setShowConfirmPass] = useState(false)
	let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
	let [passwordError, setPasswordError] = useState(false)
	let [confirmPasswordError, setConfirmPasswordError] =  useState(false)


	let handleShowPass = () => {
		setShowPass(!showPass)
	}

	let handleShowConfirmPass = () => {
		setShowConfirmPass(!showConfirmPass)
	}

	function errorsToFalse(){
		setPasswordError(false)
		setConfirmPasswordError(false)
	}

	let changePass = (e)=>{
		e.preventDefault()
		if (!password){
			errorsToFalse()
			setPasswordError(true)
			toast.error("Please put your password")
			return
		}
		if (!confirmPassword){
			errorsToFalse()
			setConfirmPasswordError(true)
			toast.error("Please confirm your password")
			return
		}
		if (password != confirmPassword){
			errorsToFalse()
			setPasswordError(true)
			setConfirmPasswordError(true)
			toast.error("Passwords don't match")
			return
		}

		errorsToFalse()
	}

	return (
		<Flex className={" mt-12 mb-28 w-full"}>
			<form className='w-[60%]'>
				<Flex className={"flex flex-col gap-16"}>
					<h2 className='font-DM-sans font-bold text-4xl text-text-dark-color pt-12 border-light-background-color border-t-2 flex flex-col'>
						Change Password
					</h2>
					<Flex className={"mt-10 justify-start w-full gap-10"}>
					<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									New Password
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<div className='relative'>
								<input
									type={showPass ? "text" : "password"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										passwordError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									value = {password}
									placeholder={"Password"}
									onChange={(e) => {
										setPassword(e.target.value)
									}}
								></input>
								{password ? (
									!showPass ? (
										<FaEye
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowPass}
										></FaEye>
									) : (
										<FaEyeSlash
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowPass}
										></FaEyeSlash>
									)
								) : (
									""
								)}
							</div>
							<Button className={"mt-12 w-fit"} onClick={changePass}>
								Change Password
							</Button>
						</Flex>

						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Confirm Password
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<div className='relative'>
								<input
									type={showConfirmPass ? "text" : "password"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										confirmPasswordError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									value = {confirmPassword}
									placeholder={"Password"}
									onChange={(e) => {
										setConfirmPassword(e.target.value)
									}}
								></input>
								{confirmPassword ? (
									!showConfirmPass ? (
										<FaEye
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowConfirmPass}
										></FaEye>
									) : (
										<FaEyeSlash
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowConfirmPass}
										></FaEyeSlash>
									)
								) : (
									""
								)}
							</div>
							
						</Flex>
					</Flex>
				</Flex>
			</form>
		</Flex>
	)
}

export default Change_Password
