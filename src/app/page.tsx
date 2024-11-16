import React from "react";
import Accordian from "./components/accordian";
import ImageSlide from "./components/image-slide";
import LoadMoreImage from "./components/load-more-images";
import LightDarkMode from "./components/dark-light-mode";

const Home = () => {
    return (
        <div className="flex justify-center items-center h-dvh flex-col gap-10">
            {/* <Accordian />
            <ImageSlide url={"https://picsum.photos/v2/list"} limit={10} />
            <LoadMoreImage /> */}
            <LightDarkMode />
        </div>
    );
};

export default Home;
