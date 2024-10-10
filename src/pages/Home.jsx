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
