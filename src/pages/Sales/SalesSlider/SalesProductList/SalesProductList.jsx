import "./SalesProductList.css";
import SalesProductCard from "./SalesProductCard/SalesProductCard.jsx";

const SalesProductList = ({ sliderRef }) => {
    return (
        <>
            <div className="product-list">
                <SalesProductCard sliderRef={sliderRef} />
            </div>
        </>
    );
}

export default SalesProductList;
