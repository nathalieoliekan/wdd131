document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    const weatherIcon = document.querySelector(".weather-icon");
    if (weatherIcon) {
        const weatherConditions = ["☀️", "🌧️", "⛅", "❄️", "🌩️"];
        const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
        weatherIcon.textContent = randomCondition;
    }

    const largeScreen = window.matchMedia("(min-width: 768px)");
    function switchStyles() {
        const link = document.getElementById("styleSheet");
        if (largeScreen.matches) {
            link.setAttribute("href", "place-large.css");
        } else {
            link.setAttribute("href", "styles-small.css");
        }
    }

    switchStyles();
    largeScreen.addEventListener("change", switchStyles);

    const temperature = 8;
    const windSpeed = 6; 

    function calculateWindChill(temp, wind) {
        if (
            ((temp <= 10 && temp >= -50) && wind > 4.8)
            || ((temp <= 50 && temp >= -58) && wind > 3)
        ) {
            return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
        } else {
            return "N/A"; 
        }
    }


    const windChillElement = document.getElementById("windChill");
    if (windChillElement) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill === "N/A" ? "N/A" : `${windChill.toFixed(2)} °C`;
    }
});
