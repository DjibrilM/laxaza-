import React from "react";
import Card from "./card";
import desImg1 from "../../public/pattern03.png";
import desImg2 from "../../public/image.png";
import desImg3 from "../../public/vectors3.png";
import desImg4 from "../../public/imageD3.png";

const stylesTypeList: {
    title: string
    image: any,
    description: string
}[] = [
        {
            title: "Style classique",
            description: "Tirez la meilleure partie de notre philosophie de conception minimaliste pour votre mode et vos styles d'habillement et un état d'esprit libre de dressing de styles quotidiens avec nos styles classiques.",
            image: desImg1
        },
        {
            title: "Style de cérémonie",
            description: "Nos articles redéfinissent les styles et la mode pour les cérémonies.",
            image: desImg2
        },
        {
            title: "Style croisé",
            description: "Nos styles croisés couvrent vos voyages à l'étranger et vous gardent dans le style",
            image: desImg3
        },
        {
            title: "Modèles limitée",
            description: "Nos éditions de modèles offrent des styles limités et type unique à la mode.",
            image: desImg4
        },
    ]

const stylesType = () => {
    return (
        <>
            <h1 className="text-center text-2xl sm:text-4xl font-primary font-bold mt-10 sm:mt-32">Différents styles au choix</h1>
            <p className="text-center  font-primary font-bold text-[15px] sm:text-[20px] mt-2">Find a style to shop in</p>

            <section className="flex p-2 pl-7 sm:pl-0 overflow-scroll sm:overflow-hidden  gap-5 sm:flex-wrap sm:items-center sm:justify-center sm:mt-32 mt-10  max-w-[1000px]  m-auto styleType">
                {stylesTypeList.map((el, index) => {
                    return (
                        <>
                            <Card key={index} imageSrc={el.image} title={el.title} descriptiion={el.description} />
                        </>
                    )
                })}
            </section>

            <div className="mb-32 sm:mb-0"></div>
        </>
    )
};

export default stylesType;
