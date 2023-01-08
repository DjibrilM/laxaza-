import React from "react";
import { TfiInfoAlt } from 'react-icons/tfi';
import { BsShopWindow, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { TbBrandMessenger } from 'react-icons/tb'
import Link from "next/link";


const mobileContactInfo = () => {
    return <div className="mt-32">
        <h1 className="text-2xl font-primary text-center font-bold">Retrouvez notre boutique sur</h1>
        <p className="font-primary mt-4 text-center px-5">Nous répertorions nos produits sur tous ces canaux afin que vous puissiez magasiner avec nous de n'importe où</p>

        <div className="w-full max-w-[500px] flex justify-between mt-16 m-auto font-primary">
            <Link href={''} className="flex flex-col items-center text-center w-[300px]">
                <BsShopWindow className="text-5xl" />
                <p>Notre Site <br /> Officiel Magasin</p>
            </Link>

            <Link href={''} className="flex flex-col items-center text-center w-[300px]">
                <BsWhatsapp className="text-5xl" />
                <p>Whatsapp Business</p>
            </Link>
        </div>



        <div className="w-full max-w-[500px] flex justify-between mt-16 m-auto font-primary">
            <Link href={''} className="flex flex-col items-center text-center w-[300px]">
                <BsInstagram className="text-5xl" />
                <p>Instagram Shop</p>
            </Link>

            <Link href={''} className="flex flex-col items-center text-center w-[300px]">
                <TbBrandMessenger className="text-5xl" />
                <p>Messenger Shop</p>
            </Link>
        </div>

    </div>;
};

export default mobileContactInfo;
