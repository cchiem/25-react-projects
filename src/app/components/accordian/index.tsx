"use client";
import React, { useState } from "react";
import { data } from "./data";
const Accordian = () => {
    console.log(data);
    const [selected, setSelected] = useState<number[]>([]);
    const handleClick = (id: number) => {
        if (selected.indexOf(id) == -1) {
            setSelected((prevSelected) => [...prevSelected, id]);
        } else
            setSelected((prevSelected) =>
                prevSelected.filter((oldId) => oldId != id)
            );
    };
    return (
        <div className="w-[400px] flex flex-col gap-4 h-max">
            {data?.map((dataItem, index) => (
                <div
                    key={index}
                    className="p-4 border-slate-800 border-dashed border-[1px]"
                >
                    <div
                        className="flex justify-between "
                        onClick={() => handleClick(dataItem.id)}
                    >
                        <h1 className="text-3xl font-bold">
                            {dataItem.question}
                        </h1>
                        <p>+</p>
                    </div>
                    {selected.indexOf(dataItem.id) != -1 ? (
                        <p>{dataItem.answer}</p>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default Accordian;
