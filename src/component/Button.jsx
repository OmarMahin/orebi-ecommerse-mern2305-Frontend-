import React from "react"
import { TailSpin } from "react-loader-spinner"

const Button = ({ children, className, onClick, disabled, loading}) => {
	return disabled ? (
		<button
			className={`py-3 px-9 border-2 border-text-dark-color text-text-dark-color font-DM-sans font-bold text-sm bg-black/20 duration-200 w-36 ${className}`}
			disabled
			onClick={onClick}
		>
			{children}
		</button>
	) : (
		<button
			className={`relative py-3 px-9 border-2 border-text-dark-color text-text-dark-color font-DM-sans font-bold text-sm ${
				!loading ? "hover:bg-text-dark-color hover:text-white duration-200" : ""
			}   w-36 ${className}`}
			onClick={
				!loading
					? onClick
					: (e) => {
							e.preventDefault()
					  }
			}
		>
			<div className=' absolute left-2 top-1/2 -translate-y-1/2'>
				<TailSpin
					visible={loading}
					height='20'
					width='20'
					color={"#262626"}
					ariaLabel='tail-spin-loading'
					radius='1'
				></TailSpin>
			</div>
			{children}
		</button>
	)
}

export default Button
