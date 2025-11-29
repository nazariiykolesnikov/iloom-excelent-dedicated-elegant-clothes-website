import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "./pages/Main/Main.jsx";
import AccountControl from "./pages/AccountControl/AccountControl.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import FavoriteProducts from "./pages/FavoriteProducts/FavoriteProducts.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import PopUpProductPreview from "./pages/PopUpProductPreview/PopUpProductPreview.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/product-page" element={<ProductPage/>} />
                <Route path="/pop-up-product-preview" element={<PopUpProductPreview/>} />
                <Route path="/payment" element={<Payment/>} />
                <Route path="/favorite-products" element={<FavoriteProducts/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/account-control" element={<AccountControl />} />
                <Route path="/" element={<Main />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </>
    )
}

export default App;