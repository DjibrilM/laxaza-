import React from "react";
import image from '../../public/content.png';
import Image from "next/image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Link from "next/link";



const Articles: {}[] = [
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    },
    {
        image: "",
    }


]


const articleCard = () => {
    return <section className="w-full flex justify-center items-center mt-28 sm:mt-36 gap-3 articles-container relative">
        {
            Articles.map((article, index) => {
                return (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="w-full h-8 bg-white rounded-full flex justify-between items-center px-3">
                            <p className="font-primary  line-through">$30</p>

                            <p className="font-primary">
                                🔥20$
                            </p>
                        </div>

                        <div className="w-[115px] sm:max-w-[200px] relative sm:w-full border-gray-500 h-[200px] sm:h-[350px] border-2 rounded-2xl overflow-hidden">
                            <Image src={image} alt="" className="w-full h-full object-cover" objectFit="cover" />
                        </div>
                    </div>
                )
            })
        }

        <Link href={''} className="sm:hidden absolute bottom-60 right-5 flex gap-3 items-center font-primary ">
            <p>plus</p>
            <BsChevronRight className="" />
        </Link>
    </section>;
};

export default articleCard;
