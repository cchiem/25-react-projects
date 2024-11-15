import React from "react";
import Accordian from "./components/accordian";
import ImageSlide from "./components/image-slide";
import Tabs from "./components/tabs";

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-10 mt-20">
            <Accordian />
            <ImageSlide url={"https://picsum.photos/v2/list"} limit={10} />
            <Tabs></Tabs>
        </div>
    );
};

export default Home;
