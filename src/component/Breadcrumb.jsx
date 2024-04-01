import React from "react"
import Flex from "./Flex"

const Breadcrumb = () => {
	const stringArray = window.location.pathname.split("/")
	const PageHeader = stringArray[1].charAt(0).toUpperCase() + stringArray[1].slice(1)
	return (
        <div>
            <h2 className=' font-DM-sans font-bold text-text-dark-color text-4xl lg:text-5xl mt-20 lg:mt-28'>{PageHeader}</h2>
            <Flex className={'flex items-center gap-2 mt-3 font-DM-sans text-text-light-color text-sm'}>
                <h4>Home</h4>
                <h4>{'>'}</h4>
                <h4>{PageHeader}</h4>
            </Flex>
        </div>
    )

}

export default Breadcrumb
