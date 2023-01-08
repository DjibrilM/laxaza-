import React from "react";
interface Props {
    customStyle: string
}

const Language: React.FC<Props> = ({ customStyle }): JSX.Element => {
    return (
        <select className={`w-32 outline-none px-3 py-2 cursor-pointer appearance-none bg-transparent border-2 rounded-md border-white ${customStyle}`}>
            <option className="border-none bg-white w-20 text-[15px] text-center">Francais</option>
            <option className="border-none bg-white mt-3 cursor-pointer w-20 text-[15px] text-center">Swahili</option>
            <option className="border-none bg-white mt-3 cursor-pointer w-20 text-[15px] text-center">English</option>
        </select>
    )

};

export default Language;
