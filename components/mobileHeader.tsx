import React from "react";
import logo from '../public/logo.svg';
import Image from "next/image";
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Link from "next/link";

const mobileHeader = () => {
    return <header className="w-full px-4 py-5 flex items-center justify-between ">
        <Image src={logo} alt="" className="w-[80px] relative top-2" />

        <div className="flex items-center justify-center gap-5">
            <BsInstagram className="text-2xl" />
            <BsFacebook className="text-2xl" />

            <Link href={''} className="bg-white py-2 px-6 font-primary rounded-md">Contact Us</Link>
        </div>
    </header>;
};

export default mobileHeader;
