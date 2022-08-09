import React, { useState } from "react";
import { currency } from "../data";
import { IoIosArrowForward } from "react-icons/io";
const Trade = () => {
    const [itemName, setItemName] = useState("Bitcoin");
    return (
        <section
            className="section lg:pt-[320px] bg-gradient-to-b 
            from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]"
        >
            <div className={"container mx-auto"}>
                <h2
                    className={"text-center section-title mb-16"}
                    data-aos={"fade-up"}
                    data-aos-offset={"400"}
                >
                    Trade securely and market the high growth cryptocurrencies.
                </h2>
                <div
                    className="flex flex-col lg:flex-row gap-[45px] items-center"
                    data-aos={"fade-up"}
                    data-aos-offset={"450"}
                >
                    {currency.map((item, index) => {
                        return (
                            <div
                                onClick={() => setItemName(item.name)}
                                key={index}
                                className={`${
                                    item.name === itemName
                                        ? "bg-violet text-white"
                                        : ""
                                } w-full rounded-2xl py-12 px-6 shadow-primary transition duration-300`}
                            >
                                <div className="flex items-center justify-center flex-col">
                                    <img
                                        className="mb-12"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <div
                                        className={
                                            "mb-4 flex gap-x-2 items-center"
                                        }
                                    >
                                        <div className="text-[32px] font-bold">
                                            {item.name}
                                        </div>
                                        <div className="text-lg text-gray-500">
                                            {item.abbr}
                                        </div>
                                    </div>
                                    <p className="mb-6 text-center">
                                        {item.description}
                                    </p>
                                    <button
                                        className={`${
                                            item.name === itemName
                                                ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3"
                                                : "text-blue w-16"
                                        } border-2 border-gray-300 h-16 rounded-full flex items-center justify-center`}
                                    >
                                        {item.name === itemName && (
                                            <div className="font-medium text-lg">
                                                Start mining
                                            </div>
                                        )}
                                        <IoIosArrowForward
                                            className={`${
                                                item.name === itemName
                                                    ? "text-2xl"
                                                    : "text-3xl"
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Trade;
