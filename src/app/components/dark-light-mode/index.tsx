"use client";
import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <div>
            <h1>{theme === "dark" ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default LightDarkMode;
