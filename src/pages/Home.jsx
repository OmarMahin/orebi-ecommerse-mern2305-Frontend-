import React from "react"
import Banner from "../component/Banner"
import Bestsellers from "../component/Bestsellers"
import HomeAds from "../component/HomeAds"
import HomeAds2 from "../component/HomeAds2"
import Information from "../component/Information"
import NewArrivals from "../component/NewArrivals"
import ProductsList from "../component/ProductsList"
import SpecialOffers from "../component/SpecialOffers"

const Home = () => {
	return (
		<>
			<Banner></Banner>
			<Information></Information>
			<HomeAds ad1='ad_1.png' ad2='ad_2.png' ad3='ad_3.png'></HomeAds>
			<NewArrivals></NewArrivals>
      <Bestsellers></Bestsellers>
      <HomeAds2 ad={'ad_2.1.png'}></HomeAds2>
      <SpecialOffers></SpecialOffers>
		</>
	)
}

export default Home
