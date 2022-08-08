import React from "react";
import CalsForm from "./CalcForm";

const Calculate = () => {
    return (
        <section className="section">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1
                        className={"section-title"}
                        data-aos={"fade-up"}
                        data-aos-offset={"400"}
                    >
                        Check how mush you can earn
                    </h1>
                    <p
                        className={"section-subtitle text-lg"}
                        data-aos={"fade-up"}
                        data-aos-offset={"450"}
                    >
                        Let's check your hash rate and calculate how much you
                        can earn today.
                    </p>
                </div>
                <CalsForm />
            </div>
        </section>
    );
};

export default Calculate;
