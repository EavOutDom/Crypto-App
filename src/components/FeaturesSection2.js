import React from "react";
import Img2 from "../assets/img/feature-2-img.png";

const FeaturesSection2 = () => {
    return (
        <section className="py-[30px] lg:py-[120px] pt-0">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-end items-center">
                    <div
                        className="flex-1 lg:absolute lg:left-0 order-2 lg:order-1"
                        data-aos="fade-right"
                        data-aos-offset="400"
                    >
                        <img src={Img2} alt="ft1" />
                    </div>
                    <div
                        className="max-w-[460px] flex-1 order-1 lg:order-2"
                        data-aos="fade-left"
                        data-aos-offset="400"
                    >
                        <h3 className="h3 mb-6">Detailed statistics</h3>
                        <p className="mb-8 text-gray">
                            View all mining relate information in real life, at
                            the point at any locations and decide which polls
                            you want to mine in.
                        </p>
                        <button className="btn px-8 mb-6 lg:mb-0">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection2;
