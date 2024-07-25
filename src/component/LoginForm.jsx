import React from "react"
import Button from "./Button"
import Flex from "./Flex"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import emailValidation from "../helpers/emailValidation"
import { toast } from "react-toastify"
import axios from "axios"

const LoginForm = ({ heading, loginFor }) => {

	axios.defaults.withCredentials = true

	let [showPass, setShowPass] = useState(false)
	let [email, setEmail] = useState("")
	let [password, setPassword] = useState("")
	let [showPassword, setShowPassword] = useState("")

	let [emailError, setEmailError] = useState(false)
	let [passwordError, setPasswordError] = useState(false)

	let [loading, setLoading] = useState(false)

	let navigation = useNavigate()

	function errorsToFalse() {
		setEmailError(false)
		setPasswordError(false)
	}

	let handleShowPassword = () => {
		setShowPassword(!showPassword)
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

		if (!password) {
			errorsToFalse()
			setPasswordError(true)
			toast.error("Please input your password")
			return
		}

		errorsToFalse()

		setLoading(true)
		console.log(loginFor)
		axios.post(`http://localhost:3000/api/v1/auth/${loginFor == 'admin' ? "admin_login" : 'member_login'}`,{
			email,
			password
		}).then((response)=>{
			if (response.data.valid){
				if (loginFor == 'admin'){
					navigation('/admin')
					return
				}
				navigation('/')
			}
			else{
				toast.error(response.data.error)
			}

			setLoading(false)
		}).catch((error)=>{
			setLoading(false)
			console.log(error)
		})
	}

	return (
		<Flex className={" mt-12 mb-28 w-full"}>
			<form className='w-[60%]'>
				<Flex className={"flex flex-col gap-16"}>
					<h2 className='font-DM-sans font-bold text-4xl text-text-dark-color pt-12 border-light-background-color border-t-2 flex flex-col'>
						{heading}
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

							<Button className={"mt-12"} onClick={handleSubmit} loading = {loading}>
								Log in
							</Button>
						</Flex>

						<Flex
							className={
								"flex flex-col w-1/2 font-DM-sans font-semibold text-text-dark-color gap-6"
							}
						>
							<Flex className={"items-center gap-2"}>
								<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
									Password
								</span>
								<span className='text-red-400 text-xl'>*</span>
							</Flex>
							<div className='relative'>
								<input
									type={showPassword ? "text" : "password"}
									className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
										passwordError ? "border-red-500" : "border-[#e2e2e2]"
									}`}
									placeholder={"Password"}
									onChange={(e) => {
										setPassword(e.target.value)
									}}
								></input>
								{password ? (
									!showPassword ? (
										<FaEye
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowPassword}
										></FaEye>
									) : (
										<FaEyeSlash
											className='absolute top-1/2 right-4 text-text-light-color cursor-pointer'
											onClick={handleShowPassword}
										></FaEyeSlash>
									)
								) : (
									""
								)}
							</div>
							<Flex
								className={
									"mt-12 justify-center flex flex-col items-end gap-3 font-DM-sans font-semibold text-text-light-color"
								}
							>
								<Link to={'/forget_password'}>
									<span className='text-text-dark-color'>Forgot password?</span>
								</Link>
								<span>
									Don't have an account?{" "}
									<Link className='text-text-dark-color' to={'/sign_up'}>Sign up</Link>
								</span>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</form>
		</Flex>
	)
}

export default LoginForm
