// script.js
const clickArea = document.getElementById("click-area");
const imageContainer = document.querySelector(".image-container");
const replayButton = document.getElementById("replay-button");

// Show the image and description when the click area is clicked
clickArea.addEventListener("click", () => {
    clickArea.style.display = "none"; // Hide the click area
    imageContainer.style.display = "block"; // Show the image container
});

// Reset the game when the replay button is clicked
replayButton.addEventListener("click", () => {
    imageContainer.style.display = "none"; // Hide the image container
    clickArea.style.display = "flex"; // Show the click area again
});
