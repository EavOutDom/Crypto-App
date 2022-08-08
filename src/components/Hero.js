import React from "react";
import Image from "../assets/img/hero-img.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Hero = () => {
    return (
        <section>
            <div className={"container mx-auto"}>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className={"flex-1"}>
                        <div
                            className={
                                "bg-white/10 p-1 my-6 rounded-full pl-1 pr-3 max-w-[365px] "
                            }
                            data-aos="fade-down"
                            data-aos-delay="400"
                        >
                            <div
                                className={
                                    "flex items-center justify-between text-sm lg:text-base"
                                }
                            >
                                <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">
                                    75% SAVE
                                </div>
                                <div>Free for black Friday weekend</div>
                            </div>
                        </div>
                        <h1
                            className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6"
                            data-aos="fade-down"
                            data-aos-delay="500"
                        >
                            Fastest & most secure platform to invest in
                            crytoverse.
                        </h1>
                        <p
                            className={"max-w-[440px] leading-relaxed"}
                            data-aos="fade-down"
                            data-aos-delay="600"
                        >
                            Get started with the most trusted crypto exchange
                            platform with $30 billion in transactions
                        </p>
                        <button
                            className="btn gap-x-6 pl-6 lg:h-16 text-sm lg:text-base my-10"
                            data-aos="fade-down"
                            data-aos-delay="700"
                        >
                            Try for free
                            <IoIosArrowDroprightCircle
                                className={"text-2xl lg:text-3xl"}
                            />
                        </button>
                    </div>
                    <div
                        className="flex-1"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <img src={Image} alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
