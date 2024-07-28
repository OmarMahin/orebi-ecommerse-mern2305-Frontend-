import axios from "axios"
import React from "react"
import { useState } from "react"
import { TailSpin } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom"
import Change_Password from "../component/Change_Password"
import Container from "../component/Container"
import Flex from "../component/Flex"

const Change_User_Password = () => {
	let { id } = useParams()

	const navigation = useNavigate()

	let [loading, setLoading] = useState(true)
	let [user_id, setUserId] = useState("")

	axios
		.post(`http://localhost:3000/api/v1/verify/verifyPage`, {
			pageLink: id,
		})
		.then((response) => {
			if (response.status == "200") {
				const data = response.data
				if (data.valid) {
					setLoading(false)
					setUserId(data.data.id)
				} else {
					navigation("*")
				}
			}
		})

	return (
		<Container>
			{loading ? (
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
			) : (
				<Change_Password user_id={user_id}></Change_Password>
			)}
		</Container>
	)
}

export default Change_User_Password
