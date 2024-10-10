import React from "react"
import { useEffect } from "react"
import { toast } from "react-toastify"
import Banner from "../component/Banner"
import Bestsellers from "../component/Bestsellers"
import HomeAds from "../component/HomeAds"
import HomeAds2 from "../component/HomeAds2"
import Information from "../component/Information"
import NewArrivals from "../component/NewArrivals"
import ProductsList from "../component/ProductsList"
import SpecialOffers from "../component/SpecialOffers"
import { Helmet } from "react-helmet-async"

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Orebi Ecommerse</title>
				<meta name='description' content='Home Page' />
				<link rel='canonical' href='https://orebiecommerse2305.netlify.app/' />

				<meta property='og:title' content={"Home"} />
				<meta property='og:description' content={"Welcome to Orebi Ecommerse"} />
				<meta property='og:image' content={"https://orebiecommerse2305.netlify.app/images/banner_image.png"} />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={window.location.href} />

				{/* Twitter meta tags (optional) */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={"Home"} />
				<meta name='twitter:description' content={"Welcome to Orebi Ecommerse"} />
				<meta name='twitter:image' content={"https://orebiecommerse2305.netlify.app/images/banner_image.png"} />
			</Helmet>
			<Banner></Banner>
			<Information></Information>
			<HomeAds ad1='ad_1.png' ad2='ad_2.png' ad3='ad_3.png'></HomeAds>
			<NewArrivals></NewArrivals>
			<Bestsellers></Bestsellers>
			<HomeAds2 ad={"ad_2.1.png"}></HomeAds2>
			<SpecialOffers></SpecialOffers>
		</>
	)
}

export default Home
