document.getElementById("clickBtn").addEventListener("click", function() {
  alert("Button clicked!");
});
   



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




// Get elements
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

// Add click event
submitBtn.addEventListener("click", function() {
  // Show message
  message.style.display = "block";

  // Disable button to prevent more clicks
  submitBtn.disabled = true;

  // Redirect after 3 seconds
  setTimeout(() => {
    window.location.href = "contact.html";
  }, 3000);
});
