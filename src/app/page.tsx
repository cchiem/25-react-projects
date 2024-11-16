import React from "react";
import Accordian from "./components/accordian";
import ImageSlide from "./components/image-slide";
import Tabs from "./components/tabs";
import LoadMoreImage from "./components/load-more-images";
import GithubFinder from "./components/github-finder";

const Home = () => {
    return (
        <div className="flex justify-center items-center mt-10 flex-col gap-10">
            {/* <Accordian />
            <ImageSlide url={"https://picsum.photos/v2/list"} limit={10} />
            <Tabs /> */}
            {/* <LoadMoreImage /> */}
            <GithubFinder />
        </div>
    );
};

export default Home;
