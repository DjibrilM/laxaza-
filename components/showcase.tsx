import React from "react";
import righLine from '../public/line.png';
import leftLine from '../public/line2.png';
import cercleImage from '../public/icons/cercle.png';
import figureImage from '../public/icons/figure.png';
import imageFigure2 from '../public/icons/icon10.png';
import imageFigure3 from '../public/icons/frame.png'
import celebrateEmoji from '../public/icons/icon2.png';
import faceCelebrate from '../public/icons/partying-face_1f973.png';
import shineEmoji from '../public/icons/logo11.png'
import Image from "next/image";


const Showcase: React.FC = (): JSX.Element => {
    return (
        <>
            <section className='relative flex justify-center items-center w-full    sm:mt-24 mt-10 h-full'>
                <button className="absolute ml-14 sm:ml-0 top-[-5px] z-10 w-[10rem] sm:w-[15rem] py-2 sm:py-3 rounded-[1rem] bg-white font-primary font-bold">
                    <Image
                        className="absolute w-[45px] sm:w-[59px] left-[-10px] bottom-[-3px]"
                        src={celebrateEmoji}
                        alt={'emoji'} />
                    <span className="relative text-[13px] sm:text-[15px] left-3 sm:left-5">Congolese Original.</span>
                </button>

                {/* /lines frames/ */}
                <Image
                    className="w-[97%] absolute h-[90%]"
                    alt=""
                    src={leftLine}
                />

                <Image
                    alt=""
                    src={righLine}
                    className="w-[100%] sm:w-[99%] absolute h-[97%]"
                />
                {/* /end of lines frames/ */}

                {/* /geometric icons/ */}
                <Image
                    className="absolute sm:w-10 w-7  sm:top-0 top-3 sm:left-0 left-[-5px] z-10"
                    alt="cercle image"
                    src={cercleImage} />

                <Image
                    alt=""
                    src={figureImage}
                    className="w-8 sm:w-10  absolute bottom-0  left-[-10px] sm:left-0 z-10"
                />

                <Image
                    alt=""
                    src={imageFigure2}
                    className="w-[2.5rem] sm:w-[3.5rem]   absolute bottom-[0.10rem] right-[-10px] sm:right-[-17px] z-10"
                />

                <Image
                    alt=""
                    src={imageFigure3}
                    className="w-[3rem] sm:w-[4rem]   absolute top-[-5px] right-[-18px] z-10"
                />
                {/* /geometric icons end/ */}

                <div className="w-full h-full relative z-20 mt-16 sm:mt-24 sm:mb-16 mb-10 text-center ">
                    <p className="text-center w-11/12 md:w-9/12 leading-7 sm:leading-10  font-primary sm:text-[1.3rem] m-auto">Laxaza vous apporte de l'unicité et du style enfin d'enrichir chaque moment de votre vie, avec ses styles minimaliste, il ouvre une porte épique pour tout le monde désirant prendre le style comme un etat d'esprit.Simple, Unique et Luxueuse.</p>
                    <h1 className="font-bold text-base sm:text-[1.4rem]  mt-5 sm:mt-12 font-primary">Simple, Unique et Luxueuse.</h1>
                    <Image src={faceCelebrate} alt="" className="w-7  sm:sm:w-14 sm:mt-10 mt-3  m-auto"></Image>
                </div>

            </section>

            <div className="w-full flex items-center justify-center">
                <h1 className="font-primary font-bold text-lg sm:mt-16 mt-6 flex text-center gap-2 m-auto items-center tracking-widest text-gray-900">Sponsor officiel  <span> <Image src={shineEmoji} alt="" className="w-5" /> </span> Epic</h1>
            </div>
        </>
    );
};

export default Showcase;
