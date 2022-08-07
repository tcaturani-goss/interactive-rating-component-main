const ratingNumber = document.querySelector("rating-number");
const selectedRating = document.getElementById("selectedRating");
const mainContainer = document.querySelector("rating-container-main");
const el = document.querySelector(".submit-btn");

function displayRating() {
    selectedRating.innerHTML = ratingNumber;
    mainContainer.style.display = "none";
  }