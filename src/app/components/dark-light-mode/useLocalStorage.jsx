import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            // Attempt to fetch the stored item
            if (typeof window !== "undefined") {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            }
        } catch (error) {
            console.error("Error reading localStorage key:", error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            // Save the value to localStorage whenever it changes
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.error("Error setting localStorage key:", error);
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
