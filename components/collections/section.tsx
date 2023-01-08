import React from "react";
import pngCercle1 from '../../public/icons/logo4.png';
import pngCercle2 from '../../public/icons/logo5.png';
import pngCercle3 from '../../public/icons/logo3.png';
import glasses from "../../public/glasses.png"
import { BsBoxArrowUpRight } from "react-icons/bs"
import Status from "./status";

import Image from "next/image";

const Section = () => {
    return (
        <section className="w-full flex items-center justify-center flex-col">

            <h1 className="text-3xl sm:text-5xl text-primary text-center mt-10 mb-5 font-primary font-bold">Go Epic.</h1>

            <div className="flex gap-4 sm:gap-12 mt-10 sm:mt-16 font-secondary sm:text-[1.2rem]">
                <div className="flex flex-col items-center gap-2 justify-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-white overflow-hidden">
                        <Image src={pngCercle1} alt="" />
                    </div>
                    <p className="font-bold">Nos models</p>
                </div>

                <div className="flex flex-col items-center gap-2 justify-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-3 border-white overflow-hidden">
                        <Image src={pngCercle2} alt="" />
                    </div>
                    <p className="text-gray-500 font-semibold">Spectacles</p>
                </div>

                <div className="flex flex-col items-center gap-2 justify-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-3 border-white overflow-hidden">
                        <Image src={pngCercle3} alt="" />
                    </div>
                    <p className="text-gray-500 font-semibold">Brand</p>
                </div>
            </div>

            <Status />

            <div className="w-full flex items-center justify-center gap-4 font-semi-primary">
                <button className="flex items-center justify-between px-2 py-[0.2rem] sm:py-[0.5rem] sm:px-3 rounded-full w-[125px] sm:w-[150px] border border-gray-400">
                    <h1>VR</h1>
                    <Image src={glasses} alt="" className="w-7 sm-w-10" />
                </button>

                <button className="flex items-center justify-between rounded-full px-4 sm:py-[0.7rem] bg-black text-white p-2 w-[150px] sm:w-[180px]">
                    <h1 className="text-sm sm:text-base">Official store</h1>
                    <BsBoxArrowUpRight className="" />
                </button>
            </div>

        </section>
    )
};

export default Section;
