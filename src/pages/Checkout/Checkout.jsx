import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import "./Checkout.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CheckoutOrders from "./CheckoutOrders/CheckoutOrders.jsx";

const breadcrumbs = [
    { id: 1, link: "Корзина" },
    { id: 2, link: "Оформление заказа" },
];

const Checkout = () => {
    return (
        <>
            <Navbar/>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CheckoutOrders />
            <Footer/>
        </>
    );
}

export default Checkout;