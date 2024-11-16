"use client";
import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}
const LoadMoreImage = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(20);

    async function fetchImages() {
        try {
            const response = await fetch(
                `https://dummyjson.com/products?limit=${limit}&skip=${
                    count * limit
                }&select=title,price`
            );
            const data = await response.json();
            if (data) {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...data.products, // because its another list thats why we spread it
                ]);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchImages();
    }, [count]);

    const loadMore = () => {
        setCount(count + 1);
    };
    return (
        <div className="mt-4 h-[400px] w-[400px]">
            <table className="bg-white border border-gray-300 shadow-lg rounded-lg left-0 right-0 ">
                <thead>
                    <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-200 hover:bg-gray-100 transition duration-150 "
                        >
                            <td className="py-3 px-6 text-left">
                                {product.title}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={() => loadMore()}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-150"
            >
                Load More
            </button>
        </div>
    );
};

export default LoadMoreImage;
