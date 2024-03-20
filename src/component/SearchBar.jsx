import React from "react";
import Input from "./Input";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className='relative'>
            <Input
                className={
                    "w-[600px] h-12 placeholder:pl-5 placeholder:py-4 placeholder:font-DM-sans placeholder:text-sm"
                }
                placeholder={"Search Products"}
            ></Input>

            <FaSearch className="absolute right-5 top-1/2 translate-y-[-50%]"/>
        </div>
    );
};

export default SearchBar;
