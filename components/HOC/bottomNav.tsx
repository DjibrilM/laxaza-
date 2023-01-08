import React, { ReactElement, useEffect } from "react";
import HomeIcon from '../../public/icons/house.png';
import HomeActive from '../../public/icons/house (2).png';
import bottomLogo from '../../public/icons/bottomLogo.svg';
import bottomLogoActive from '../../public/icons/bottomLogoActive.svg';
import HeadsetVR from '../../public/icons/vr-headset.svg'
import { HiOutlineShoppingBag } from "react-icons/hi"
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
    children: JSX.Element
}

const bottomNav: React.FC<Props> = ({ children }): ReactElement => {

    const { pathname } = useRouter();

    return <>
        {children}
        <nav className="w-full border-gray-400 flex items-center h-[95px] p-4 px-7 justify-between fixed bg-[#D9D9D9]  bottom-0 z-50 border-t border-t-[#8080801e] sm:hidden">
            <Link className="" href={'/'}>
                {
                    pathname === '/' ? <Image src={HomeActive} className="w-[20px]" alt="" /> : <Image src={HomeIcon} className="w-[20px]" alt="" />
                }
            </Link>

            <Link className="" href={'/store'}>
                <HiOutlineShoppingBag className="text-[30px] text-[#222]" style={pathname === '/store' ? { color: "#27AE60" } : {}} />
            </Link>

            <Link href={''} className="">
                <Image src={HeadsetVR} className="w-[30px]" alt="" />
            </Link>

            <Link href={'/about'} className="w-[60px]">

                {
                    pathname === '/about' ?
                        <Image src={bottomLogoActive} className="w-[65px]" alt="" />
                        : <Image src={bottomLogo} className="w-[65px]" alt="" />
                }

            </Link>

        </nav>
    </>
};

export default bottomNav;
