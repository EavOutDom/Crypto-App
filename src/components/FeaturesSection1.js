import React from "react";
import Img1 from "../assets/img/feature-1-img.png";

const FeaturesSection1 = () => {
    return (
        <section className="pb-[30px] lg:pb-[120px] pt-0">
            <div className="flex flex-col lg:flex-row items-start">
                <div
                    className="max-w-[460px] mb-6 lg:mt-10"
                    data-aos="fade-right"
                    data-aos-offset="400"
                >
                    <h3 className="h3 mb-6">Invest smart</h3>
                    <p className="mb-8 text-gray">
                        Get full statistics information about behavior of buyers
                        and sellers will help you to make decision.
                    </p>
                    <button className="btn px-8">Learn more</button>
                </div>
                <div
                    className="flex-1 flex justify-end"
                    data-aos="fade-left"
                    data-aos-offset="400"
                >
                    <img src={Img1} alt="ft1" />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection1;
