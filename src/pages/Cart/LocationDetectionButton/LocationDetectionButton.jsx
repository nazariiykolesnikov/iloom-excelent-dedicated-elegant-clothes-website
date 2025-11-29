import { useState } from "react";
import "./LocationDetectionButton.css";

const LocationDetectionButton = () => {
    const [locationText, setLocationText] = useState("Определить местоположение");
    const [isDisabled, setIsDisabled] = useState(false);
    const [isCoordinates, setCoordinates] = useState({ latitude: null, longitude: null });
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const apiKey = "0912a423ad8144b8a23c6686e8f5d769";

    const handleLocationClick = () => {
        if (!navigator.geolocation) {
            setLocationText("Your browser doesn't support geolocation");
            setIsDisabled(true);
            return;
        }

        setLocationText("Allow to detect your current location");
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };

    const onSuccess = async (position) => {
        setLocationText("Detecting your current location....");
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });

        try {
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
            );
            const result = await response.json();
            const components = result.results[0].components;

            const detectCurrentCity =
                components.city
                || components.town
                || components.village
                || components.hamlet
                || city
                || "";
            const detectCurrentCountry =
                components.country
                || country
                || "";

            setCity(detectCurrentCity);
            setCountry(detectCurrentCountry);

            const displayFullAddress = `${detectCurrentCity}, ${detectCurrentCountry}`;
            setLocationText(displayFullAddress);
        } catch (error) {
            setLocationText("Something went wrong");
            console.error("Fetch error:", error);
        }
    };

    const onError = (error) => {
        isCoordinates(true);

        console.log("'isCoordinates' current state:" + isCoordinates);
        console.log("Error of getting the current location:" + error);

        if (error.code === 1) {
            setLocationText("You have denied the request");
        } else if (error.code === 2) {
            setLocationText("Location aren't available");
        } else {
            setLocationText("Something went wrong");
        }

        setIsDisabled(true);
    };

    return (
        <>
            <button
                className="location-detection-btn"
                onClick={handleLocationClick}
                disabled={isDisabled}
            >
                <a
                    className="location-detection-btn__link"
                    href="#"
                >
                    {locationText}
                </a>
            </button>
        </>
    );
}

export default LocationDetectionButton;