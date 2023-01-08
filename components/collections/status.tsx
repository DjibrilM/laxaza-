import React, { useEffect, useRef, useState } from "react";
import { BsFillPauseFill, BsFullscreen, BsFillPlayFill } from 'react-icons/bs'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules


const initialSatus = [
    {
        images: [
            {
                url: 'https://ae01.alicdn.com/kf/H78d805dac0914df59ed4589a40cee8d1h/Costume-noir-Slim-Fit-pour-hommes-Costume-de-smoking-de-mariage-de-mari-de-f-te.jpeg_Q90.jpeg_.webp',
                active: true,
            },
            {
                url: 'https://qph.cf2.quoracdn.net/main-qimg-c339fad29682674c55684365000794bd.webp',
                active: false,
            },
            {
                url: 'https://bluejay.com.my/wp-content/uploads/2021/12/istockphoto-1296361252-170667a.jpg',
                active: false,
            }
        ],

        active: false,
    },
    {
        images: [
            {
                url: 'https://cdn.shopify.com/s/files/1/0293/9277/products/MiniStoleYourToysOversizedJogger-Charcoal_MER_360x.jpg?v=1616449915',
                active: true,
            },
            {
                url: 'https://cdn.pixabay.com/photo/2017/08/02/19/54/stylish-boy-2573130_960_720.jpg',
                active: false,
            },
            {
                url: 'https://media.tedbaker.com/t_dt_1-1m,f_auto/content/2022/landing%20pages/wk44/men/Landscape_NYE_MB.jpg',
                active: false,
            }
        ],
        active: true
    },

    {
        images: [
            {
                url: 'https://i.pinimg.com/originals/0d/54/6f/0d546f0b0184fa318c37b87da5241c59.jpg',
                active: true,
            },
            {
                url: 'https://www.shutterstock.com/image-photo/cute-fashionable-boy-on-light-260nw-782580133.jpg',
                active: false,
            },
            {
                url: 'https://cdn.shopify.com/s/files/1/0293/9277/products/MiniFactCheckPlaidShirt-Greencombo_MER_360x.jpg?v=1667597048',
                active: false,
            }
        ],

        active: false
    }
];

const Status = () => {
    const [statusList, setStatusList] = useState(initialSatus);
    const [activeStatus, setActiveStatus]: any = useState<{}>({ ...statusList[2] });
    const [activeImage, setActiveImage] = useState<number>(0);
    const indicators = useRef<HTMLDivElement[]>([]);
    const [indicatorIndex, setIndicatorIndex] = useState<number>(0);
    const [paused, setPaused] = useState<boolean>(false);

    useEffect(() => {
        const indicator = document.getElementById(indicators.current[0].id) as HTMLDivElement;
        setIndicatorIndex(0);
        indicator.style.transition = '5s';
        indicator.style.width = '100%';
        const prevButton = document.querySelector('.swiper-button-next') as HTMLDivElement;
        const nextButton = document.querySelector('.swiper-button-prev') as HTMLDivElement;

        //hidde navigation button
        prevButton.style.opacity = '0';
        nextButton.style.opacity = '0';
    }, [])

    const switchIndicator = (index: number) => {
        setActiveImage(index);
        const getIndicator = document.getElementById(indicators.current[index].id) as HTMLDivElement;
        getIndicator.style.transition = '5s';
        getIndicator.style.width = '100%';
    }

    const pause = () => {
        if (!paused) {
            const getIndicatorById = document.getElementById(indicators.current[indicatorIndex].id) as HTMLDivElement;
            const { width } = getIndicatorById.getBoundingClientRect();
            getIndicatorById.style.transition = "none";
            getIndicatorById.style.width = `${Math.floor(width)}px`;
        } else {
            const getIndicatorById = document.getElementById(indicators.current[indicatorIndex].id) as HTMLDivElement;
            getIndicatorById.style.transition = "5s";
            getIndicatorById.style.width = "100%";
        }
    }

    //the following function switches the active andicator to the next(images switching loop)
    const indicatorTransitionEnd = (index: number) => {
        //when reaching the last indicator
        if (index + 1 > indicators.current.length - 1) {
            indicators.current.forEach(el => {
                const indicator = document.getElementById(el.id) as HTMLDivElement;
                indicator.style.transition = '0s';
                indicator.style.width = '0%';
            })

            const findActiveStatus = statusList.findIndex(el => { return el.active === true; })
            const nextButon = document.querySelector('.swiper-button-prev') as HTMLDivElement;

            if (!statusList[findActiveStatus - 1]) {
                const status = [...statusList];
                status[findActiveStatus].active = false;
                status[findActiveStatus + 2].active = true;
                setActiveStatus({ ...statusList[1] });
                setActiveImage(activeImage);
                setStatusList([...status]);
                nextButon.click();
                setTimeout(() => {
                    switchIndicator(0);
                    setIndicatorIndex(0)
                }, 1000);
                return
            };

            const previousValue = [...statusList];
            previousValue[findActiveStatus].active = false;
            previousValue[findActiveStatus - 1].active = true;
            setActiveStatus({ ...previousValue[findActiveStatus - 1] });
            nextButon.click();
            setStatusList([...previousValue]);
            setTimeout(() => {
                switchIndicator(0);
                setIndicatorIndex(0)
            }, 2000);
            return
        }

        setActiveImage(index + 1);
        switchIndicator(index + 1);
        setIndicatorIndex(index + 1)
    }

    return (
        <>
            <div className="mt-20 w-full max-w-[300px] flex items-center justify-between">
                <div className="">
                    <BsFullscreen className="text-base cursor-pointer" />
                </div>

                <h1 className="flex items-center justify-center font-semi-primary text-[1.3rem]"><span className="text-3xl mr-1">#</span> LaxazaClassic </h1>
                <div className="">
                    {!paused ?
                        <BsFillPauseFill
                            onClick={() => {
                                setPaused(true)
                                pause()
                            }} className="text-base cursor-pointer" /> :
                        <BsFillPlayFill
                            onClick={() => {
                                setPaused(false);
                                pause();
                            }}
                            className="text-base cursor-pointer" />}
                </div>
            </div>

            <div className="w-[300px] items-center justify-between flex gap-2 my-8">
                {activeStatus.images?.map((status: any, index: number) => {
                    return (
                        <div key={index} className="w-[40%] sm:w-full  h-[5px] relative rounded-full bg-white overflow-hidden">
                            <div
                                onTransitionEnd={() => indicatorTransitionEnd(index)}
                                id={index.toString()}
                                ref={(el) => {
                                    if (el) {
                                        indicators.current[index] = el;
                                    }
                                }} className="h-full absolute w-0  bg-black"></div>
                        </div>
                    )
                })}
            </div>

            <Swiper
                allowTouchMove={false}
                slidesPerView={3}
                spaceBetween={0}
                loop
                navigation={true}
                modules={[Navigation]}
                className="mySwiper max-w-[810px] min-w-[300px] w-full mb-10"
            >
                {statusList.map((el, index) => {
                    return <>
                        <SwiperSlide key={index} className={"w-[400px] relative right-14 sm:right-0" + `${el.active ? " active" : " "}`}>
                            <div className={"w-[250px] overflow-hidden bg-gray-400  h-[350px] flex items-center justify-center sm:rounded-md" + " active"}>
                                <img src={el.active ? `${el.images[activeImage].url}` : `${el.images[0].url}`} className="w-full h-full object-cover" alt="" />
                            </div>
                        </SwiperSlide>
                    </>
                })}

            </Swiper>
        </>
    )
};

export default Status;
