// Dynamically insert current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
