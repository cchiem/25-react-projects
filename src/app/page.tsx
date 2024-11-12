import React from "react";
import Accordian from "./components/accordian";
import ImageSlide from "./components/image-slide";

const Home = () => {
    return (
        <div className="flex justify-center items-center h-dvh flex-col gap-10">
            <Accordian />
            <ImageSlide url={"https://picsum.photos/v2/list"} limit={10} />
        </div>
    );
};

export default Home;
