import React from "react";
import Image from 'next/image';
import logo from '../public/logo.svg'
import { BsInstagram, BsFacebook, BsBoxArrowUpRight } from 'react-icons/bs';
import galasseImage from '../public/glasses.png';
import Language from "./languageDropDown/languageDropDown";
import Link from "next/link";


const Header = (): JSX.Element => {
    return <header className="flex w-full mt-10 sm:mt-[4rem]   px-5  sm:px-12 custom-laptop:px-[15rem] justify-between items-center font-primary ">
        <div className="flex items-center gap-2 sm:gap-0">
            <Link href={'/'}>
                <Image
                    className=" w-16 sm:w-20 md:w-32 relative top-2 md:top-3"
                    src={logo}
                    alt="Picture of the author"
                />
            </Link>
            <Language customStyle="sm:w-32 w-[100px] px-0 mt-1 sm:ml-3 sm:px-7 h-10 sm:h-11  cursor-pointer custom-tablet:hidden  rounded-[14px]" />
        </div>

        <div className="gap-7 items-center hidden custom-tablet:flex">
            <Language customStyle="" />
            <div className="w-[80px]   h-14  cursor-pointer flex-col rounded-full flex  items-center border  border-gray-400">
                <Image
                    className="w-8"
                    src={galasseImage}
                    alt="icon"
                />
                <p className="relative bottom-2 left-1 font-primary">VR.</p>
            </div>
        </div>

        <div className="flex gap-7 items-center">

            <Link href={'/#'} className="hidden custom-tablet:block cursor-pointer">
                <BsInstagram className="text-3xl" />
            </Link>

            <Link href={'/#'} className="hidden  custom-tablet:block cursor-pointer">
                <BsFacebook className=" text-3xl" />
            </Link>

            <button className="py-2 px-3 sm:py-3 sm:px-10 relative left-2 sm:left-0 bg-black text-white font-thin flex items-center gap-5 rounded-full">
                <span className="font-semi-primary">Our Store</span>
                <BsBoxArrowUpRight className="text-[12px] sm:text-base" />
            </button>
        </div>
    </header>;
};

export default Header;
