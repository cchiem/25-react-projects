import React from "react";
import Accordian from "./components/accordian";
import ImageSlide from "./components/image-slide";
import Tabs from "./components/tabs";
import LoadMoreImage from "./components/load-more-images";
import GithubFinder from "./components/github-finder";
import ProductPage from "./components/search-params";
import CustomModal from "./components/click-outside-modal";

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-10 border-2 border-black">
            <Accordian />
            <ImageSlide url={"https://picsum.photos/v2/list"} limit={10} />
            <Tabs />
            <GithubFinder />
            <ProductPage />
            <CustomModal />
            <LoadMoreImage />
        </div>
    );
};

export default Home;
