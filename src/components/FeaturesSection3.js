import React from "react";
import Img3 from "../assets/img/feature-3-img.png";

const FeaturesSection3 = () => {
    return (
        <section className="py-[30px] lg:py-[120px] pt-0">
            <div className="flex flex-col lg:flex-row items-start">
                <div
                    className="max-w-[460px] mb-6 lg:mt-10"
                    data-aos="fade-right"
                    data-aos-offset="400"
                >
                    <h3 className="h3 mb-6">
                        Grow your profit and track your investments
                    </h3>
                    <p className="mb-8 text-gray max-w-[410px]">
                        Use advanced analytics tools. Clear TradingView charts
                        let you track current and historical profit investments.
                    </p>
                    <button className="btn px-8">Learn more</button>
                </div>
                <div
                    className="flex-1 flex justify-end"
                    data-aos="fade-left"
                    data-aos-offset="400"
                >
                    <img src={Img3} alt="ft1" />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection3;
