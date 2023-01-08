import React from "react";


interface Props {
    active: boolean,
    source: string,
}

const Card: React.FC<Props> = ({ active, source }): JSX.Element => {
    return (
        <div
            style={active ? { transform: "scale(1.4)" } : {}}
            className="w-[150px] h-[250px] rounded-lg overflow-hidden bg-black   cursor-pointer item duration-300">
            <img className="w-full h-full object-cover" src={source} alt="" />
        </div>
    )
};

export default Card;
