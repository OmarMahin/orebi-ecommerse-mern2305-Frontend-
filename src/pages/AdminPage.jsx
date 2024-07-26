import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import { useLayoutEffect } from "react"
import { TailSpin } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import AdminPanel from "../component/AdminPanel"
import Container from "../component/Container"
import Flex from "../component/Flex"

const AdminPage = () => {
	axios.defaults.withCredentials = true

	let [loading, setLoading] = useState(true)
	let [refresh, setRefresh] = useState(true)

	const navigation = useNavigate()

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/verify/authorize_user")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (data.authorized && data.data.type == "admin") {
						setLoading(false)
					} else {
						navigation("/admin_login")
					}
				}
			})
			.catch((err) => {
				setLoading(false)
				navigation("/admin_login")
			})

		setTimeout(() => {
			setRefresh(!refresh)
		}, 120000)
	}, [refresh])

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
				<AdminPanel></AdminPanel>
			)}
		</Container>
	)
}

export default AdminPage
