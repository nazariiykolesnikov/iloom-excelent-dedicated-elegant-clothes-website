import "./SalesSlider.css";
import { useEffect, useRef } from "react";
import { assets } from "../../../assets/data/assets.js";
import MainProductList from "./MainProductList/MainProductList.jsx";

const SalesSlider = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -500, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 500, behavior: "smooth" });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollRight();
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h2 className="bestsellers-section__heading">Хиты продаж</h2>
            <div className="sales-slider__wrapper">
                <button className="sales-slider__arrow left" onClick={scrollLeft}>
                    <img className="sales-slider__arrow-icon-left" src={assets.arrow_down} alt="arrow right white"/>
                </button>
                <MainProductList sliderRef={sliderRef} />
                <button className="sales-slider__arrow right" onClick={scrollRight}>
                    <img className="sales-slider__arrow-icon-right" src={assets.arrow_down} alt="arrow right white"/>
                </button>
            </div>
        </>
    );
};

export default SalesSlider;