import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import Flex from "./Flex";
import { Link } from "react-router-dom"
import List from "./List";
import ListItem from "./ListItem";

const ShopByCategoryMenu = () => {
    let [showCategoryMenu, setShowCategoryMenu] = useState(false);
    let categoryMenuRef = useRef()

    useEffect(()=>{
        document.addEventListener('click', (e)=>{
            
           if (!categoryMenuRef.current.contains(e.target)){
            setShowCategoryMenu(false)
           }
        })
        
    },[])

    let handleCategoryMenu = () => {
        setShowCategoryMenu(!showCategoryMenu);
    };

    return (
        <div className="  relative" ref = {categoryMenuRef}>
            <Flex className={"items-center gap-3 hover:cursor-pointer"} onClick = {handleCategoryMenu} >
                <HiOutlineBars3BottomLeft className='text-text-dark-color w-6 h-5' />
                <h3 className='text-text-dark-color font-DM-sans text-sm hover:font-bold duration-200 hidden lg:block'>
                    Shop by Category
                </h3>
            </Flex>
            {showCategoryMenu && (
                <div className={"absolute -bottom-5 translate-y-[100%] left-1 bg-text-dark-color z-20"}>
                    <List className={"flex-col"}>
                        <ListItem
                            className={
                                "justify-between w-60 items-center border-b-2 border-[#2D2D2D] duration-200 hover:pl-4 hover:font-bold"
                            }
                        >
                            <Link className={"py-4 pl-5 font-DM-sans text-white text-sm"}>
                                Accesories
                            </Link>
                            <MdKeyboardArrowRight className='mr-5 text-white' />
                        </ListItem>
                        <ListItem
                            className={
                                "justify-between w-60 items-center border-b-2 border-[#2D2D2D] duration-200 hover:pl-4 hover:font-bold"
                            }
                        >
                            <Link className={"py-4 pl-5 font-DM-sans text-white text-sm"}>
                                Furniture
                            </Link>
                            <MdKeyboardArrowRight className='mr-5 text-white' />
                        </ListItem>
                        <ListItem
                            className={
                                "justify-between w-60 items-center border-b-2 border-[#2D2D2D] duration-200 hover:pl-4 hover:font-bold"
                            }
                        >
                            <Link className={"py-4 pl-5 font-DM-sans text-white text-sm"}>
                                Electronics
                            </Link>
                            <MdKeyboardArrowRight className='mr-5 text-white' />
                        </ListItem>
                        <ListItem
                            className={
                                "justify-between w-60 items-center border-b-2 border-[#2D2D2D] duration-200 hover:pl-4 hover:font-bold"
                            }
                        >
                            <Link className={"py-4 pl-5 font-DM-sans text-white text-sm"}>
                                Clothes
                            </Link>
                            <MdKeyboardArrowRight className='mr-5 text-white' />
                        </ListItem>
                        <ListItem
                            className={
                                "justify-between w-60 items-center border-b-2 border-[#2D2D2D] duration-200 hover:pl-4 hover:font-bold"
                            }
                        >
                            <Link className={"py-4 pl-5 font-DM-sans text-white text-sm"}>
                                Bags
                            </Link>
                            <MdKeyboardArrowRight className='mr-5 text-white' />
                        </ListItem>
                        <ListItem
                            className={
                                "justify-between w-60 items-center duration-200 hover:pl-4 hover:font-bold"
                            }
                        >
                            <Link className={"py-4 pl-5 font-DM-sans text-white text-sm"}>
                                Home appliances
                            </Link>
                            <MdKeyboardArrowRight className='mr-5 text-white' />
                        </ListItem>
                    </List>
                </div>
            )}
        </div>
    );
};

export default ShopByCategoryMenu;
