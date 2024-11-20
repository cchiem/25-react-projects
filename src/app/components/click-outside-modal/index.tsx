"use client";
import { useClickOutside } from "@/app/hooks/hooks";
import React, { useRef, useState } from "react";

const CustomModal = () => {
    const ref = useRef<HTMLDivElement | null>(null); // Correctly typing the ref
    const [showContent, setShowContent] = useState(false);
    useClickOutside(ref, () => setShowContent(false));

    return (
        <div>
            {showContent ? (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center"
                    ref={ref}
                >
                    <div className="bg-white rounded-lg w-[300px] h-[500px] flex justify-center items-center shadow-gray-950">
                        <button
                            onClick={() => setShowContent(!showContent)}
                            className="bg-blue-600 p-4 rounded-xl hover:bg-blue-400 text-white"
                        >
                            Close Content
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <button
                        onClick={() => setShowContent(!showContent)}
                        className="bg-blue-600 p-4 rounded-xl hover:bg-blue-400 text-white"
                    >
                        Show Content
                    </button>
                </div>
            )}
        </div>
    );
};

export default CustomModal;
