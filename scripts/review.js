document.addEventListener("DOMContentLoaded", () => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);

    // Populate fields
    document.getElementById("productName").textContent = params.get("product") || "N/A";
    document.getElementById("rating").textContent = params.get("rating") || "N/A";
    document.getElementById("installDate").textContent = params.get("installDate") || "N/A";
    
    // Handle checkboxes (multiple values)
    const features = params.getAll("features");
    document.getElementById("features").textContent = features.length ? features.join(", ") : "None";

    document.getElementById("writtenReview").textContent = params.get("review") || "N/A";
    document.getElementById("userName").textContent = params.get("username") || "Anonymous";

    // Update and display review counter
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("reviewCount").textContent = reviewCount;
});
