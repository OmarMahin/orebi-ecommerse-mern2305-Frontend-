import React from "react";
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoCaretDown } from "react-icons/io5";
import { PiShoppingCartFill } from "react-icons/pi";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Flex from "./Flex";
import Image from "./Image";
import Link from "./Link";
import List from "./List";
import ListItem from "./ListItem";
import Button from "./Button";
import { useEffect } from "react";
import { useRef } from "react";

const CartAndAccount = () => {
    let accountRef = useRef();
    let cartRef = useRef();

    let [showAccount, setShowAccount] = useState(false);
    let [showCart, setShowCart] = useState(false);

    let handleShowAccount = () => {
        setShowAccount(!showAccount);
    };

    let handleShowCart = () => {
        setShowCart(!showCart);
    };

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (!accountRef.current.contains(e.target)) {
                setShowAccount(false);
            }
            if (!cartRef.current.contains(e.target)) {
                setShowCart(false);
            }
        });
    }, []);

    return (
        <Flex className={"flex items-center text-text-dark-color gap-3 lg:gap-8 relative"}>
            <div ref={accountRef}>
                <Flex
                    className={"flex items-center gap-1 hover:cursor-pointer relative"}
                    onClick={handleShowAccount}
                >
                    <IoMdPerson className='w-5 h-5' />
                    {showAccount ?  <IoCaretDown className="-rotate-180 duration-300"/> :  <IoCaretDown className="-rotate-0 duration-300"/>}
                   
                    
                    {showAccount && (
                        <div className='absolute -bottom-4 right-0 translate-y-[100%]'>
                            <List className={"flex-col gap-0"}>
                                <ListItem className={"border-2 border-[#F0F0F0] border-b-0"}>
                                    <Link
                                        className={
                                            "py-4 px-14 hover:bg-white hover:text-text-dark-color font-DM-sans w-52 bg-text-dark-color text-white duration-150"
                                        }
                                    >
                                        Log out
                                    </Link>
                                </ListItem>
                                <ListItem className={"border-2 border-[#F0F0F0] border-t-0"}>
                                    <Link
                                        className={
                                            "py-4 px-14 hover:bg-white hover:text-text-dark-color font-DM-sans w-52 bg-text-dark-color text-white duration-150"
                                        }
                                    >
                                        My Account
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                    )}
                </Flex>
            </div>
            
            <div ref={cartRef}><PiShoppingCartFill className='w-5 h-5 hover:cursor-pointer' onClick={handleShowCart} />
            {showCart && (
                <div className='absolute -bottom-4 right-0 translate-y-[100%]'>
                    <List className={"bg-[#F5F5F3] w-[358px] flex-col"}>
                        <ListItem className={"items-center w-full justify-between p-5"}>
                            <Link className={"items-center gap-4"}>
                                <Image
                                    src={"images/cart_Image.png"}
                                    className={"w-20 h-20"}
                                ></Image>
                                <Flex
                                    className={
                                        " flex-col text-text-dark-color font-DM-sans font-bold gap-3 text-sm"
                                    }
                                >
                                    <h3>Black Smart Watch</h3>
                                    <h3>$44.00</h3>
                                </Flex>
                            </Link>

                            <IoClose className=' text-text-dark-color w-5 h-5 cursor-pointer' />
                        </ListItem>
                    </List>
                    <div className='w-full bg-white p-5 border-2 border-top-0 border-[#F0F0F0]'>
                        <h3 className='text-text-light-color font-DM-sans text-base'>
                            Subtotal:{" "}
                            <span className='text-text-dark-color font-DM-sans text-base font-bold'>
                                $44.00
                            </span>{" "}
                        </h3>
                        <Flex className={"flex justify-between mt-3"}>
                            <Button>View Cart</Button>
                            <Button>Checkout</Button>
                        </Flex>
                    </div>
                </div>
            )}</div>
            
        </Flex>
    );
};

export default CartAndAccount;
