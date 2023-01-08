import React from "react";
import Link from "next/link";
import frame1 from '../public/icons/frame3.png';
import frame2 from '../public/icons/logo7.png';
import frame3 from '../public/icons/frameO.png';
import fram4 from '../public/icons/FrameD.png';
import frame5 from '../public/icons/logo10.png';

import Image from "next/image";

const postLink: {
    link: string,
    text: string,
}[] = [
        {
            link: "",
            text: "Brand Abassador"
        },
        {
            link: "",
            text: "Manaquin"
        },
        {
            link: "",
            text: "Reseller "
        },
        {
            link: "",
            text: "Sponsor"
        },
    ]

const footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center">
            <div className="w-full items-center justify-center flex gap-5 mt-20 mb-20 font-primary">
                <Link href="" className="w-[150px] h-10 bg-black rounded-full text-white flex items-center justify-center">Contact US</Link>
                <Link href="" className="w-[150px] h-10 border border-gray-700 rounded-full text-center  items-center justify-center flex">Info</Link>
            </div>

            <h1 className="text-center font-primary font-bold text-[20px]">Become a</h1>


            <div className="flex items-center justify-center gap-5 mt-14 flex-wrap">
                {postLink.map(link => {
                    return <Link href={link.link} key={Math.random() + new Date().toISOString()} className="p-2 h-[50px] border border-black rounded-lg w-[180px] flex items-center justify-center">
                        {
                            link.text
                        }
                    </Link>
                })}

            </div>
            <h1 className="text-2xl font-primary mt-16">Copyright 2022 - Laxaza Era.</h1>

            <Link href={'/'} className="text-[1.2rem] font-bold font-primary underline mt-4">
                Other Laxaza’s Brand
            </Link>

            <div className="flex flex-col mb-20">
                <div className="mt-10 gap-10 flex">
                    <Image className="w-[40px]" src={frame1} alt="" />
                    <Image className="w-[40px]" src={frame2} alt="" />
                    <Image className="w-[40px]" src={frame3} alt="" />
                    <Image className="w-[40px]" src={fram4} alt="" />
                </div>
                <Image className="w-[100px] self-end" src={frame5} alt="" />
            </div>


        </footer>
    )
        ;
};

export default footer;
