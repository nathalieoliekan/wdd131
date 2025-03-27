document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    const images = document.querySelectorAll("img[loading='lazy']");

    images.forEach((img) => {
        img.addEventListener("load", () => {
            img.classList.add("fade-in");
        });
    });

});