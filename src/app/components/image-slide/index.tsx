"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaRegCircle, FaCircle } from "react-icons/fa";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

interface ImageSlideProps {
    url: string;
    limit: number;
}

interface ImageObject {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}
const ImageSlide = ({ url, limit }: ImageSlideProps) => {
    const [images, setImages] = useState<ImageObject[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);

    async function fetchImages(url: string) {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=1&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    //keep fetching the images
    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);

    const nextImage = () => {
        console.log("Next");
        setCurrentSlide(
            currentSlide !== images.length - 1 ? currentSlide + 1 : 0
        );
    };

    const prevImage = () => {
        console.log("Prev");
        setCurrentSlide(
            currentSlide != 0 ? currentSlide - 1 : images.length - 1
        );
    };

    return (
        <div className="flex flex-rol justify-center items-center w-[400px] h-[300px] overflow-hidden relative">
            <BsArrowLeftCircleFill
                className="absolute left-0 cursor-pointer"
                onClick={prevImage}
            ></BsArrowLeftCircleFill>
            {
                loading && (
                    <Skeleton
                        sx={{ bgcolor: "grey.700" }}
                        variant="rounded"
                        width={300}
                        height={200}
                        animation="wave"
                        className="rounded-lg"
                    />
                ) // Five-line loading skeleton
            }
            {images &&
                images.map((image, index) =>
                    index === currentSlide ? (
                        <Image
                            key={image.id}
                            src={image.download_url}
                            alt=""
                            width={300}
                            height={200}
                            className="select-none rounded-lg"
                        />
                    ) : null
                )}
            <BsArrowRightCircleFill
                className="absolute right-0 cursor-pointer"
                onClick={nextImage}
            ></BsArrowRightCircleFill>
            <div className="flex flex-row gap-1 absolute bottom-0">
                {images &&
                    images.map((_, index) =>
                        index === currentSlide ? (
                            <FaRegCircle key={index}></FaRegCircle>
                        ) : (
                            <FaCircle key={index}></FaCircle>
                        )
                    )}
            </div>
        </div>
    );
};

export default ImageSlide;
