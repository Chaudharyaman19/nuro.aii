let menu = document.querySelector("#menu");
let toggle = document.querySelector("#toggle");
let closeButton = document.querySelector(".close-button");

// Show toggle with slide-down animation
menu.addEventListener("click", function () {
  toggle.classList.remove("slide-up"); // Remove slide-up if it was applied
  toggle.classList.add("slide-down"); // Add slide-down animation
  toggle.style.display = "block"; // Make it visible
});

// Hide toggle with slide-up animation
closeButton.addEventListener("click", function () {
  toggle.classList.remove("slide-down"); // Remove slide-down if it was applied
  toggle.classList.add("slide-up"); // Add slide-up animation
  setTimeout(() => {
    toggle.style.display = "none"; // Hide after slide-up animation completes
  }, 1000); // 1 second delay to match the animation duration
});
