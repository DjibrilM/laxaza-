import React from "react";
import image from '../../public/content.png';
import Image from "next/image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import ArticleCard from "./articleCard";
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

function articles() {
    return (
        <>
            <h1 className="text-center text-4xl font-primary">🔥 Articles à prix réduit</h1>
            <p className="text-center max-w-[600px] m-auto text-gray-700 mt-2 font-primary">Nos meilleures offres sont uniquement disponibles sur notre site internet. Obtenez votre offre aujourd'hui et achetez-la, le stock est limité.</p>

            <div className="w-full relative top-20 px-5 flex justify-end items-start">
                <Link href={""} className="w-[120px] bg-black h-10 rounded-full flex p-2 px-4 justify-between items-center">
                    <p className="font-primary text-white">Plus</p>
                    <BsChevronRight className="text-white" />
                </Link>
            </div>

            <ArticleCard />

            <div className="w-full relative top-20 px-5 flex  items-start">
                <Link href={""} className="w-[120px] bg-black h-10 rounded-full flex p-3 pr-5 justify-between items-center">
                    <BsChevronLeft className="text-white" />
                    <p className="font-primary text-white">Plus</p>
                </Link>
            </div>
        </>
    );
}

export default articles;
