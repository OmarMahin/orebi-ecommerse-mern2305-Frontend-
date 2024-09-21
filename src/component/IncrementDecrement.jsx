import React, { useState } from "react"
import Flex from "./Flex"

const IncrementDecrement = ({ onChange, value = null, available }) => {
	let [current, setCurrent] = useState(value ? value : 1)

	const returnValue = (e) => {
		onChange(e)
	}
	const increment = () => {
		let number = current + 1
		if (number > available) {
			number = available
		}
		setCurrent(number)
		returnValue(number)
	}

	const decrement = () => {
		let number = current - 1
		if (number < 1) {
			number = 1
		}
		setCurrent(number)
		returnValue(number)
	}

	const setValue = (e) => {
        
		let number = Number(e.target.value)
		if (number < 1) {
			number = 1
		}
		if (number > available) {
			number = available
		}
		setCurrent(number)
		returnValue(number)
	}

	return (
		<Flex>
			<button
				className='bg-light-background-color py-[3px] px-[13px] font-DM-sans font-semibold text-text-dark-color text-center border-text-light-color border-[1px] text-lg'
				onClick={increment}
			>
				+
			</button>
			<input
				type='text'
				className='w-[50px] border-text-light-color border-[1px] focus:outline-none px-2 text-center'
				value={`${current}`}
				onChange={setValue}
			></input>
			<button
				className='bg-light-background-color py-[3px] px-[13px] font-DM-sans font-semibold text-text-dark-color text-center border-text-light-color border-[1px] text-lg'
				onClick={decrement}
			>
				-
			</button>
		</Flex>
	)
}

export default IncrementDecrement
