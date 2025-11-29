import "./ILoomStyleInstagram.css";
import { iLoomStyleInstagramImages } from "../../../assets/data/sales-order-gifts-images.js";

const ILoomStyleInstagram = () => {
    const images = Object.values(iLoomStyleInstagramImages);

    return (
        <div className="i-loom-style-instagram__container">
            <div className="i-loom-style-instagram__wrapper">
                <div className="i-loom-style-instagram__heading">
                    <h2 className="i-loom-style-instagram__heading__iloomstyle">@ILOOM.STYLE</h2>
                    <span className="i-loom-style-instagram__heading__instagram">Instagram</span>
                </div>
                <div className="i-loom-style-instagram__image_cards">
                    {images.map((src, index) => (
                        <div key={index} className="instagram-grid__cards__wrapper">
                            <img
                                src={src}
                                alt={`Instagram ${index + 1}`}
                                className="instagram-grid__cards__card"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ILoomStyleInstagram;
