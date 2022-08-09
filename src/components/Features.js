import React from "react";
import FeaturesSection1 from "./FeaturesSection1";
import FeaturesSection2 from "./FeaturesSection2";
import FeaturesSection3 from "./FeaturesSection3";

const Features = () => {
    return (
        <section className="bg-violet pt-12 lg:pt-24 ">
            <div className="container mx-auto">
                <div className="mx-auto max-w-[760px] text-center mb-24">
                    <h2
                        className="section-title"
                        data-aos="fade-up"
                        data-aos-offset="400"
                    >
                        Market sentiments, portfolio management, and run
                        infrastructure of your choice
                    </h2>
                </div>
                <FeaturesSection1 />
                <FeaturesSection2 />
                <FeaturesSection3 />
            </div>
        </section>
    );
};

export default Features;
