import React from "react";
import imageFrame from '../public/icons/logo10.png'
import { HiOutlineShoppingBag } from "react-icons/hi"
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from 'react-icons/bs'


const storeHeader = () => {
    return <div className="w-full flex flex-col items-center justify-center mt-10">
        <HiOutlineShoppingBag className="text-[40px] text-[#222]" />
        <h1 className="font-semi-primary text-2xl mt-3"> <span className="font-bold">LaXaZa</span>  Online stores</h1>
        <Image src={imageFrame} alt="" className="w-10 relative right-14" />

        <Link href={''} className="bg-black text-white font-primary px-4 py-2 mt-5 rounded-full w-[180px] flex justify-between items-center">
            <span>Official store</span>
            <BsBoxArrowUpRight className="text-[12px] sm:text-base" />
        </Link>
    </div>;
};

export default storeHeader;
