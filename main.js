const dscc = require('@google/dscc');
const LOCAL = dscc.LOCAL;

let currentReviewIndex = 0;
let reviews = [];

// Function to update the review card with the current review
function updateReviewCard(index) {
  if (reviews.length === 0) return;

  const review = reviews[index];
  document.getElementById('review-name').textContent = review.name;
  document.getElementById('review-date').textContent = review.date;
  document.getElementById('review-comment').textContent = review.comment;
}

// Function to handle next button click
function nextReview() {
  if (reviews.length === 0) return;
  
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  updateReviewCard(currentReviewIndex);
}

// Function to handle previous button click
function prevReview() {
  if (reviews.length === 0) return;
  
  currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
  updateReviewCard(currentReviewIndex);
}

// Attach event listeners to buttons
document.getElementById('next-button').addEventListener('click', nextReview);
document.getElementById('prev-button').addEventListener('click', prevReview);

// Function to draw the visualization
const drawViz = (data) => {
  // Extract the data
  reviews = data.tables.DEFAULT.map(row => ({
    name: row['review_name'][0],
    date: row['review_date'][0],
    comment: row['review_comment'][0]
  }));

  // Initialize the first review
  currentReviewIndex = 0;
  updateReviewCard(currentReviewIndex);
};

// Subscribe to data changes
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
