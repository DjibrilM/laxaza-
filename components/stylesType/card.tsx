import React from "react";
import Image from "next/image";
import lineImage from '../../public/icons/line.png'
import Link from "next/link";

interface Props {
    imageSrc: any,
    title: string,
    descriptiion: string,
}

const Card: React.FC<Props> = ({ imageSrc, title, descriptiion }) => {
    return <div className="sm:max-w-[420px]  sm:w-full sm:h-[320px] rounded-[40px] sm:rounded-lg p-7 bg-[#ffffffa4]">
        <div className="flex justify-between items-center ">
            <h1 className="sm:text-[1.2rem] font-primary">{title}</h1>
            <div className="w-14 h-14 rounded-full border-[3px] border-gray-300 sm:p-[3px] p-[1px] bg-transparent overflow-hidden">
                <Image src={imageSrc} className="w-full h-full rounded-full" alt="" />
            </div>
        </div>

        <div className="h-[140px] mt-2 w-full">
            <p className="text-[12px] sm:text-[15px] w-full font-primary sm:leading-6 text-center sm:text-left">
                {descriptiion}
            </p>
        </div>

        <div className="w-full flex justify-center items-center relative bottom-4 sm:bottom-0">
            <div className="w-[250px] flex items-center justify-center relative">
                <Image alt="" className="sm:right-2 right-8 absolute m-auto top-5  w-[80%] sm:w-[100%]  " src={lineImage} />
                <Link href={''} className="sm:w-[150px] w-[120px] sm:py-3 py-2 rounded-full bg-black text-white font-semi-primary text-center">
                    <span>Show Now</span>
                </Link>
            </div>
        </div>
    </div>;
};

export default Card;
