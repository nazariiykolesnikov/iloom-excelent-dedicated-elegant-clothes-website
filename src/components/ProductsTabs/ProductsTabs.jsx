import "./NewProducts.css";
import {
    products_mini_hoodies_part1,
    products_mini_hoodies_part2,
    products_mini_hoodies_part3,
    products_mini_t_shirts_part_1,
    products_mini_t_shirts_part_2,
    products_mini_t_shirts_part_3,
    products_mini_sweatshirts_part1,
    products_mini_sweatshirts_part2,
    products_mini_sweatshirts_part3,
} from "../../assets/data/products-mini.js";
import { useState } from "react";
import RenderProducts from "../RenderProducts/RenderProducts.jsx";

const ProductsTabs = () => {
    const [activeTab, setActiveTab] = useState("hoodie");

    const tabs = [
        { id: "hoodie", label: "Худи" },
        { id: "t-shirt", label: "Футболки" },
        { id: "sweatshirt", label: "Свитшоты" },
    ];

    return (
        <div className="
            newproducts-section__container mt-[70px]
        ">
            <section className="
                newproducts-section__wrapper relative z-0 py-16 px-6 bg-white
            ">
                <h2 className="
                    newproducts-section__heading text-[32px] font-[700] text-[#212429] montserrat
                ">
                    Новинки
                </h2>
                <div className="
                    news_product__tabs--container mt-[60px] px-[40px] w-full
                ">
                    <div className="
                        news_product__tabs flex gap-[24px] text-[18px] font-[400] text-[#555]
                    ">
                        {tabs.map(({id, label}) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`
                                    news_product__tabs--button text-[16px] w-[100px] border-none bg-transparent 
                                    montserrat transition-all cursor-pointer
                                        ${ activeTab === id 
                                        ? "news_product__tabs-active text-[#000000]" 
                                        : "text-[#757575]"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className="news_product__tabs-content ml-[15px] mt-[50px]">
                        {activeTab === "hoodie" && <RenderProducts product={products_mini_hoodies_part1} />}
                        {activeTab === "t-shirt" && <RenderProducts product={products_mini_t_shirts_part_1} />}
                        {activeTab === "sweatshirt" && <RenderProducts product={products_mini_sweatshirts_part1} />}
                    </div>
                    <div className="news_product__tabs-content ml-[22px]">
                        {activeTab === "hoodie" && <RenderProducts product={products_mini_hoodies_part2} />}
                        {activeTab === "t-shirt" && <RenderProducts product={products_mini_t_shirts_part_2} />}
                        {activeTab === "sweatshirt" && <RenderProducts product={products_mini_sweatshirts_part2} />}
                    </div>
                    <div className="news_product__tabs-content ml-[22px]">
                        {activeTab === "hoodie" && <RenderProducts product={products_mini_hoodies_part3} />}
                        {activeTab === "t-shirt" && <RenderProducts product={products_mini_t_shirts_part_3} />}
                        {activeTab === "sweatshirt" && <RenderProducts product={products_mini_sweatshirts_part3} />}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewProducts;