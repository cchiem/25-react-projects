"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
const items = [];
const colorVariants = [];
const sizeVariants = [];

const ProductPage = () => {
    const searchParams = useSearchParams();
    const color = searchParams.get("color") || "black";
    const size = searchParams.get("size") || "sm";

    return (
        <div>
            <h1>{`Size is: ${size}`}</h1>
            <h1>{`Color is: ${color}`}</h1>
            <Link
                href={`?${new URLSearchParams({
                    color: "black",
                    size: "xl",
                })}`}
            >
                Black
            </Link>
        </div>
    );
};

export default ProductPage;
