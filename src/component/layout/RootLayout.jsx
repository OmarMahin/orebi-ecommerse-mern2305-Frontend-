import React from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "../Footer"
import Header from "../Header"
import Navbar from "../Navbar"

const RootLayout = () => {
	return (
		<div>
			<ScrollRestoration></ScrollRestoration>
			<ToastContainer
				className={"w-[400px] text-center font-DM-sans text-[16px] duration-700"}
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme='light'
				transition={Slide}
			/>
			<Navbar></Navbar>
			<Header></Header>
			<Outlet />
			<Footer></Footer>
		</div>
	)
}

export default RootLayout
