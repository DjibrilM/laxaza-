import React from "react";
import { TfiInfoAlt } from 'react-icons/tfi';
import { BsShopWindow, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { TbBrandMessenger } from 'react-icons/tb'
import Link from "next/link";



const contactInfo = () => {
    return <>
        <h1 className="text-center text-4xl font-primary">Retrouvez notre boutique sur</h1>
        <p className="text-center max-w-[400px] m-auto text-gray-700 mt-2 font-primary">Nous répertorions nos produits sur tous ces canaux afin que vous puissiez magasiner avec nous de n'importe où</p>

        <div className="max-w-[500px] flex items-center justify-center py-2 pb-3 px-3 text-center wifull bg-white rounded-full  relative m-auto mt-20">
            <div className="w-10  top-[-20px] h-10  bg-white rounded-full border-2 absolute bottom-5 border-[#D9D9D9] flex items-center justify-center text-3xl">
                <TfiInfoAlt className="text-gray-700" />
            </div>

            <p className="mt-3 px-1 pt-1 font-primary">Avec notre site Web et Whatsapp, apprenez-en plus sur nous, et découvrez la boutique Laxaza en un clin d'œil.</p>
        </div>

        <div className="w-full max-w-[500px] flex justify-between mt-16 m-auto font-primary">
            <div className="flex flex-col items-center text-center w-[300px]">
                <BsShopWindow className="text-5xl" />
                <p>Notre Site <br /> Officiel Magasin</p>
            </div>

            <div className="flex flex-col items-center text-center w-[300px]">
                <BsWhatsapp className="text-5xl" />
                <p>Whatsapp Business</p>
            </div>
        </div>


        <div className="max-w-[500px] flex items-center justify-center py-2 pb-3 px-3 text-center wifull bg-white rounded-full  relative m-auto mt-20">
            <div className="w-10  top-[-20px] h-10  bg-white rounded-full border-2 absolute bottom-5 border-[#D9D9D9] flex items-center justify-center text-3xl">
                <TfiInfoAlt className="text-gray-700" />
            </div>

            <p className="mt-3 px-1 pt-1 font-primary">Avec IG et Messenger Explorez notre magasin et restez connecté sur les nouveaux arrivages, les ventes flash, etc..</p>
        </div>

        <div className="w-full max-w-[500px] flex justify-between mt-16 m-auto font-primary">
            <div className="flex flex-col items-center text-center w-[300px]">
                <BsInstagram className="text-5xl" />
                <p>Instagram Shop</p>
            </div>

            <div className="flex flex-col items-center text-center w-[300px]">
                <TbBrandMessenger className="text-5xl" />
                <p>Messenger Shop</p>
            </div>
        </div>

    </>;
};

export default contactInfo;
