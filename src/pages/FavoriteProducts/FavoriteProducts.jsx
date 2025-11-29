import { useState } from "react";
import { assets } from "../../assets/data/assets.js";
import {
    products_mini_hoodies_p1,
    products_mini_hoodies_p2,
    products_mini_hoodies_p3,
    products_mini_t_shirts_p1,
    products_mini_t_shirts_p2,
    products_mini_t_shirts_p3,
    products_mini_sweatshirts_p1,
    products_mini_sweatshirts_p2
} from "../../assets/data/products-mini.js";
import "../FavoriteProducts/FavoriteProducts.css";
import "../ProductPage/ProductPage.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ProductList from "./ProductList/ProductList.jsx";

const breadcrumbs = [
    { id: 1, link: "Главная" },
    { id: 2, link: "Футболки" },
];

const filterOptions = {
    "Цвет": ['Красный', 'Синий', 'Зелёный', 'Чёрный'],
    "Цена": ['До 500₴', '500–1000₴', '1000–2000₴', 'Больше 2000₴'],
    "Размер": ['XS', 'S', 'M', 'L', 'XL'],
    "Коллекция": ['Весна', 'Лето', 'Осень', 'Зима'],
};

const filterOptionsSorting = {
    "Популярности": ['Популярности', 'Цене', 'Новинкам'],
};

const productListOptions = [
    products_mini_hoodies_p1,
    products_mini_hoodies_p2,
    products_mini_hoodies_p3,
    products_mini_t_shirts_p1,
    products_mini_t_shirts_p2,
    products_mini_t_shirts_p3,
    products_mini_sweatshirts_p1,
    products_mini_sweatshirts_p2
];

const FavoriteProducts = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (label) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <>
            <Navbar/>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <div className="filter-bar__container">
                <div className="filter-bar">
                    <span className="filter-bar__text">Фильтровать:</span>
                    { Object.entries(filterOptions).map(([label, options]) => (
                        <div className="filter-dropdown" key={label}>
                            <button className="filter-button" onClick={() => toggleDropdown(label)}>
                                {label}
                                <img className="arrow" src={assets.arrow_down_black} alt="arrow down black logo" />
                            </button>
                            {openDropdown === label && (
                                <ul className="dropdown-list">
                                    {options.map((option) => (
                                        <li key={option} className="dropdown-item">{option}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className="filter-bar">
                    <span className="filter-bar__text">Сортировать по:</span>
                    { Object.entries(filterOptionsSorting).map(([label, options]) => (
                        <div className="filter-dropdown" key={label}>
                            <button
                                className="filter-button"
                                onClick={() => toggleDropdown(label)}
                            >
                                {label}
                                <span className="arrow">&#9662;</span>
                            </button>
                            {openDropdown === label && (
                                <ul className="dropdown-list">
                                    { options.map((option) => (
                                        <li key={option} className="dropdown-item">{option}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {productListOptions.map((products, index) => (
                <ProductList key={index} products={products} assets={assets} />
            ))}
            <Footer/>
        </>
    );
};

export default FavoriteProducts;