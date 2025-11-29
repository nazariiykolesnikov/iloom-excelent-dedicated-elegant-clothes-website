import "./SalesProductList.css";
import MainProductCard from "./MainProductCard/MainProductCard.jsx";

const SalesProductList = ({ sliderRef }) => {
    return (
        <>
            <div className="product-list">
                <MainProductCard sliderRef={sliderRef} />
            </div>
        </>
    );
}

export default SalesProductList;
