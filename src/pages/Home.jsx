import React from 'react'
import Banner from '../component/Banner'
import HomeAds from '../component/HomeAds'
import Information from '../component/Information'
import ProductsList from '../component/ProductsList'

const Home = () => {
  return (
    <>
    <Banner></Banner>
    <Information></Information>
    <HomeAds ad1 = 'ad_1.png' ad2 = 'ad_2.png' ad3 = 'ad_3.png'></HomeAds>
    <ProductsList heading={'New Arrivals'}></ProductsList>
    </>
  )
}

export default Home