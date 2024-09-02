import React from "react"
import { FaCircleArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const BackButton = () => {

    const navigation = useNavigate()
    const handleGoBack = () => {
        navigation(-1)
    }
	return (
		<FaCircleArrowLeft className='w-[30px] h-[30px] hover:cursor-pointer text-text-dark-color' onClick={handleGoBack}/>
	)
}

export default BackButton
