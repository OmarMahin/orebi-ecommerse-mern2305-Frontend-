import React from "react"

const Button = ({ children, className, onClick, disabled }) => {
	return disabled ? (
		<button
			className={`py-3 px-9 border-2 border-text-dark-color text-text-dark-color font-DM-sans font-bold text-sm bg-black/20 duration-200 w-36 ${className}`} disabled
			onClick={onClick}
		>
			{children}
		</button>
	) : (
		<button
			className={`py-3 px-9 border-2 border-text-dark-color text-text-dark-color font-DM-sans font-bold text-sm hover:bg-text-dark-color hover:text-white duration-200 w-36 ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
