import React from "react"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom"
import Container from "../component/Container"
import Flex from "../component/Flex"
import axios from 'axios'
import { toast } from "react-toastify"
import { useEffect } from "react"

const EmailVerify = () => {
	let [loading, setLoading] = useState(true)

	const {id} = useParams()
	const navigate = useNavigate()
	
	useEffect(()=>{

		axios.post("http://localhost:3000/api/v1/verify/verify_account",{
			url: id
		}).then((response)=>{
			setLoading(false)
			if (response.status == 200){
				if (response.data.valid){
					toast.success("Account verified successfully")
				}
				else if (response.data.valid == false){
					toast.info("Account already verified")
				}
				navigate('/')
			}
			
		}).catch((error)=>{
			if (error.response.status == 400){
				navigate('/bad_request')
			}
		})
	},[])

	return (
		<Container>
			<Flex className={"items-center justify-center my-40"}>
				<TailSpin
					visible={loading}
					height='80'
					width='80'
					color={"#262626"}
					ariaLabel='tail-spin-loading'
					radius='1'
				></TailSpin>
			</Flex>
		</Container>
	)
}

export default EmailVerify
