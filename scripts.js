// Mock additional reviews
const reviews = [
  { title: "Smooth Ride", content: "The suspension on the Raptor R is unmatched. It's perfect for off-roading." },
  { title: "Luxurious Interior", content: "Ford outdid themselves with premium materials and tech features!" },
  { title: "Worth Every Penny", content: "Expensive, but every dollar feels justified when you're behind the wheel." }
];

const reviewContainer = document.getElementById("review-container");
const loadReviewsButton = document.getElementById("load-reviews");

loadReviewsButton.addEventListener("click", () => {
  reviews.forEach(review => {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    reviewDiv.innerHTML = `<h3>${review.title}</h3><p>${review.content}</p>`;
    reviewContainer.appendChild(reviewDiv);
  });
  loadReviewsButton.style.display = "none"; // Hide button after loading reviews
});