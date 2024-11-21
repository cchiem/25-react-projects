"use client";
import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <div
            className={`w-dvw h-dvh${
                theme === "dark"
                    ? " bg-black text-white "
                    : " bg-white text-black "
            }`}
        >
            <button
                onClick={toggleTheme}
                className="fixed top-10 right-10 bg-blue-600 p-4 rounded-xl hover:bg-blue-500"
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default LightDarkMode;
