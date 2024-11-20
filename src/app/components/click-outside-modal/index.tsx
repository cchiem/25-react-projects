"use client";
import { useClickOutside } from "@/app/hooks/hooks";
import React, { useRef, useState } from "react";

const CustomModal = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [showContent, setShowContent] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // For controlling animation states

    useClickOutside(ref, () => {
        setIsVisible(false);
        setTimeout(() => setShowContent(false), 250); // Sync with animation duration
    });

    const handleOpenModal = () => {
        setShowContent(true);
        setTimeout(() => setIsVisible(true), 10); // Add slight delay to trigger animation
    };

    const handleCloseModal = () => {
        setIsVisible(false);
        setTimeout(() => setShowContent(false), 250);
    };

    return (
        <div>
            {showContent && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center backdrop-blur-sm">
                    <div
                        className={`bg-white rounded-lg w-[300px] h-[500px] flex justify-center items-center shadow-gray-950 flex-col gap-4 transition-all duration-250 ease-out transform ${
                            isVisible
                                ? "scale-100 opacity-100"
                                : "scale-90 opacity-0"
                        }`}
                        ref={ref}
                    >
                        <h1>This is Modal Content</h1>
                        <button
                            onClick={handleCloseModal}
                            className="bg-blue-600 p-4 rounded-xl hover:bg-blue-400 text-white"
                        >
                            Close Content
                        </button>
                    </div>
                </div>
            )}
            {!showContent && (
                <button
                    onClick={handleOpenModal}
                    className="fixed bottom-10 right-10 bg-blue-600 p-4 rounded-xl hover:bg-blue-400 text-white my-10"
                >
                    Show Content
                </button>
            )}
        </div>
    );
};

export default CustomModal;
