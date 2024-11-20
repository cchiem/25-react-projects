import { useEffect, useState } from "react";

export function useFetch<T>(url: string): [T | null, boolean] {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T | null>(null); // Allow null for initial state
    async function fetchGithubUser() {
        try {
            setLoading(true);
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
            setLoading(false);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchGithubUser();
    }, [url]);

    return [data, loading];
}

export function useClickOutside(
    ref: React.MutableRefObject<HTMLElement | null>,
    handler: () => void
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Check if the click is outside the referenced element
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(); // Call the handler if outside click detected
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            // Cleanup the event listeners on unmount
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}
