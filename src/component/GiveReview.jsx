import React, { useEffect, useState } from "react"
import Flex from "./Flex"
import Button from "./Button"
import axios from "axios"
import { toast } from "react-toastify"
import Rating from "react-rating"
import { FaRegStar } from "react-icons/fa"
import { FaStarHalfAlt } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

const GiveReview = ({ productId }) => {
	axios.defaults.withCredentials = true

	const [ratingError, setRatingError] = useState(false)
	const [prosError, setProsError] = useState(false)
	const [consError, setConsError] = useState(false)
	const [commentError, setCommentError] = useState(false)

	const [rating, setRating] = useState(0)
	const [pros, setPros] = useState("")
	const [cons, setCons] = useState("")
	const [comment, setComment] = useState("")

	const [userId, setUserId] = useState("")
	const [loading, setLoading] = useState(false)
	const [loggedIn, setLoggedIn] = useState(false)

	const addReview = (e) => {
		e.preventDefault()
		setLoading(true)
		axios
			.post(`http://localhost:3000/api/v1/review/add_review`, {
				user: userId,
				product: productId,
				rating,
				reviewDescription: comment,
				pros,
				cons,
			})
			.then((response) => {
				if (response.status == "200") {
					toast.success("Review Added Successfully")
					setLoading(false)
					
				}
			})
	}

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/v1/verify/authorize_user")
			.then((response) => {
				if (response.status == "200") {
					const data = response.data
					setUserId(data.data.id)
				}
			})
			.catch((err) => {
				setLoggedIn(false)
			})
	}, [])

	return (
		<Flex className={"flex flex-col"}>
			<h2 className='font-DM-sans font-bold text-text-dark-color text-3xl'>Give A Review</h2>
			<form className='mt-10'>
				<Flex className={"flex flex-col gap-6"}>
					<Flex
						className={
							"flex flex-row w-1/2 font-DM-sans font-semibold text-text-dark-color gap-3 items-center"
						}
					>
						<Flex className={"items-center gap-2"}>
							<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
								Rating
							</span>
							<span className='text-red-400 text-xl'>*</span>
						</Flex>
						<Rating
							onChange={(e) => {
								setRating(e)
							}}
							emptySymbol={<FaRegStar className='text-yellow-500 text-2xl' />}
							fullSymbol={<FaStar className='text-yellow-500 text-2xl' />}
							fractions={2}
							initialRating={rating}
						></Rating>
					</Flex>

					<div>
						<Flex className={"items-center gap-2"}>
							<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
								Product pros
							</span>
							<span className='text-red-400 text-xl'>*</span>
						</Flex>
						<input
							type={"text"}
							className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
								prosError ? "border-red-500" : "border-[#e2e2e2]"
							}`}
							placeholder={"Pros"}
							value={pros}
							onChange={(e) => {
								setPros(e.target.value)
							}}
						></input>
					</div>

					<div>
						<Flex className={"items-center gap-2"}>
							<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
								Product cons
							</span>
							<span className='text-red-400 text-xl'>*</span>
						</Flex>
						<input
							type={"text"}
							className={`w-full focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
								consError ? "border-red-500" : "border-[#e2e2e2]"
							}`}
							placeholder={"Cons"}
							value={cons}
							onChange={(e) => {
								setCons(e.target.value)
							}}
						></input>
					</div>
					<div>
						<Flex className={"items-center gap-2"}>
							<span className='font-DM-sans font-bold text-xl text-text-dark-color'>
								Review
							</span>
							<span className='text-red-400 text-xl'>*</span>
						</Flex>
						<textarea
							className={`w-full h-[150px] focus:outline-none py-4 border-b-2 placeholder:font-DM-sans placeholder:font-semibold ${
								prosError ? "border-red-500" : "border-[#e2e2e2]"
							}`}
							placeholder={"Review"}
							value={comment}
							onChange={(e) => {
								setComment(e.target.value)
							}}
						></textarea>
					</div>
					<Button className={"w-fit"} loading={loading} onClick={(e) => addReview(e)}>
						Add Review
					</Button>
				</Flex>
			</form>
		</Flex>
	)
}

export default GiveReview
