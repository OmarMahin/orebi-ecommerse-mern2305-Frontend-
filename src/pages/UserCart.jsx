import React, { useEffect, useState } from "react"
import Container from "../component/Container"
import Breadcrumb from "../component/Breadcrumb"
import Cart from "../component/Cart"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const UserCart = () => {
	const navigation = useNavigate()

	let [loggedIn, setLoggedIn] = useState(false)
	let [refresh, setRefresh] = useState(false)
	let [userId, setUserId] = useState('')

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/verify/authorize_user")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					if (!data.authorized) {
						navigation("/login")
						return
					}
					if (data.authorized && !loggedIn) {
						setLoggedIn(true)
						setUserId(data.data.id)
					} else if (!data.authorized && loggedIn) {
						setLoggedIn(false)
						navigation("/login")
					}
				}
			})
			.catch((err) => {
				setLoggedIn(false)
			})

		setTimeout(() => {
			setRefresh(!refresh)
		}, 120000)
	}, [refresh])
	return (
		<Container>
			<Breadcrumb></Breadcrumb>
			{userId && <Cart user={userId}> </Cart>}
		</Container>
	)
}

export default UserCart
