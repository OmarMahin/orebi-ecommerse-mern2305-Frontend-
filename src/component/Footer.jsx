import React from "react"
import Container from "./Container"
import Flex from "./Flex"
import FooterItemList from "./FooterItemList"
import { Link } from "react-router-dom"
import List from "./List"
import ListItem from "./ListItem"
import { FaInstagram } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import Image from "./Image"

const Footer = () => {
	return (
		<div className='bg-[#F5F5F3]'>
			<Container>
				<Flex className={"pt-14 pb-14 justify-between"}>
					<Flex className={"flex flex-col gap-16 lg:w-[35%] items-center lg:items-start"}>
						<Flex className={"flex justify-between lg:gap-none gap-9"}>
							<FooterItemList
								heading={"MENU"}
								links={["Home", "Shop", "About", "Contact", "Journal"]}
							></FooterItemList>
							<FooterItemList
								heading={"SHOP"}
								links={[
									"Category 1",
									"Category 2",
									"Category 3",
									"Category 4",
									"Category 5",
								]}
							></FooterItemList>
							<FooterItemList
								heading={"HELP"}
								links={[
									"Privacy Policy",
									"Terms & Conditions",
									"Special E-shop",
									"Shipping",
									"Secure Payments",
								]}
							></FooterItemList>
						</Flex>
						<div>
							<List className={"text-text-dark-color gap-6 flex"}>
								<ListItem>
									<Link className={"text-base"}>
										<FaFacebookF />
									</Link>
								</ListItem>
								<ListItem className={"text-[20px]"}>
									<Link>
										<FaLinkedinIn />
									</Link>
								</ListItem>
								<ListItem className={"text-[20px]"}>
									<Link>
										<FaInstagram />
									</Link>
								</ListItem>
							</List>
						</div>
					</Flex>
					<Flex className={'flex flex-col items-center lg:items-start mt-10 lg:mt-0'}>
						<h3 className=' font-DM-sans text-base text-text-dark-color font-bold'>
							(052) 611-5711
						</h3>
						<h3 className=' font-DM-sans text-base text-text-dark-color font-bold mb-4'>
							company@domain.com
						</h3>
						<p className=' text-text-light-color text-sm'>
							575 Crescent Ave. Quakertown, PA 18951
						</p>
					</Flex>
				<Flex className={'flex flex-col items-center lg:items-start gap-16 lg:gap-52 mt-10 lg:mt-0'}>
                    <Image src={'./images/FooterLogo.png'} alt = 'Footer Logo' className={'lg:w-fit'}></Image>
                    <p className="text-[#6D6D6D] font-DM-sans text-sm">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </Flex>
				</Flex>
			</Container>
		</div>
	)
}

export default Footer
