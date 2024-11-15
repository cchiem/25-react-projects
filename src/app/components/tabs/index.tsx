"use client";
import React, { useState } from "react";
import { data } from "./data";

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleClick = (index: number) => {
        setCurrentTab(index);
    };
    return (
        <div className="bg-[#DEE6ED] w-[800px] outline outline-8 outline-white rounded-3xl text-[24px] font-bold m-4 flex ">
            <div className="flex flex-col">
                {data.map((tab, index) => {
                    const selectedTab = currentTab === index;
                    const prevTab = currentTab - 1 === index;
                    const nextTab = currentTab + 1 === index;

                    let tabStyle = "w-52 p-4 text-center ";
                    if (selectedTab) {
                        tabStyle += "bg-[#DEE6ED]";
                    } else {
                        tabStyle += "bg-white ";
                    }
                    if (prevTab) {
                        tabStyle += "rounded-br-3xl transition duration-100";
                    }
                    if (nextTab) {
                        tabStyle += "rounded-tr-3xl transition duration-100 ";
                    }

                    return (
                        <button
                            key={index}
                            className={tabStyle}
                            onClick={() => handleClick(index)}
                        >
                            {tab.id}
                        </button>
                    );
                })}
            </div>
            <div className="bg-[#DEE6ED] w-full rounded-2xl p-4">
                {data[currentTab] && data[currentTab].content}
            </div>
        </div>
    );
};

export default Tabs;
