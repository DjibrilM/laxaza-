import React from "react";
import icons from "../public/icons/mobileFooter.svg"
import Image from "next/image";


const mobileFooter = () => {
    return <footer className="my-10 w-full h-20 mb-[95px] flex items-center justify-center ">
        <Image src={icons} alt="" className="w-[150px] " />
    </footer>;
};

export default mobileFooter;
