// Get the input fields and button
const nameInput = document.getElementById("name");
const reviewInput = document.getElementById("review");
const submitBtn = document.getElementById("submitBtn");
const reviewsList = document.getElementById("reviewsList");

// When user clicks Submit
submitBtn.addEventListener("click", function() {
  const name = nameInput.value.trim();
  const review = reviewInput.value.trim();

  // Check that both fields are filled
  if (name === "" || review === "") {
    alert("Please fill in both your name and review.");
    return;
  }

  // Create a new review element
  const newReview = document.createElement("div");
  newReview.style.marginTop = "10px";
  newReview.style.padding = "8px";
  newReview.style.borderBottom = "1px solid #ccc";
  newReview.innerHTML = `<strong>${name}</strong><p>${review}</p>`;

  // Add the new review to the list
  reviewsList.appendChild(newReview);

  // Clear the form
  nameInput.value = "";
  reviewInput.value = "";

  // Optional: show confirmation
  alert("✅ Review submitted!");
});
