import "./Sales.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SalesBanner from "./SalesBanner/SalesBanner.jsx";
import SalesSlider from "./SalesSlider/SalesSlider.jsx";
import SalesTabs from "./SalesTabs/SalesTabs.jsx";
import SalesOrderGiftWrapping from "./SalesOrderGiftWrapping/SalesOrderGiftWrapping.jsx";
import ILoomStyleInstagram from "./ILoomStyleInstagram/ILoomStyleInstagram.jsx";
import Subscribing from "./Subscribing/Subscribing.jsx";

const Sales = () => {
    return (
        <div>
            <Navbar />
            <SalesBanner />
            <SalesSlider />
            <SalesTabs />
            <SalesOrderGiftWrapping />
            <ILoomStyleInstagram />
            <Subscribing />
            <Footer />
        </div>
    )
}

export default Sales;
