import React from "react";

const CalcForm = () => {
    return (
        <div
            className="w-full max-w-[950px] mx-auto bg-white
          rounded-2xl p-12 text-darkblue shadow-primary
        "
            data-aos={"fade-up"}
            data-aos-offset={"500"}
        >
            <form
                className={
                    "flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0"
                }
            >
                <input
                    className={"placeholder:text-darkblue input"}
                    placeholder="Enter your hash rate"
                    type={"text"}
                />
                <select className="select">
                    <option value="">TH/s</option>
                    <option value="">GH/s</option>
                    <option value="">KH/s</option>
                    <option value="">FH/s</option>
                    <option value="">CH/s</option>
                </select>
                <button className="btn text-white px-8 flex self-start">
                    Calculate
                </button>
            </form>
            <div className="mt-24">
                <div className={"text-blue font-medium mb-4"}>
                    ESTIMATED 24 HOUR REVENUE:
                </div>
                <div className="text-[32px] font-bold mb-3">
                    0.055 130 59 ETH<span className="text-blue">($1275)</span>
                </div>
                <div className="text-gray-500 tracking-[1%]">
                    Revenue will change based on difficulty and Ethereum price.
                </div>
            </div>
        </div>
    );
};

export default CalcForm;
