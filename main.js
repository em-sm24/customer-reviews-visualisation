document.addEventListener('DOMContentLoaded', function() {
  let currentReviewIndex = 0;
  const reviews = [
    { name: 'Alice', date: '2024-05-01', comment: 'Great product!' },
    { name: 'Bob', date: '2024-05-02', comment: 'Very satisfied.' },
    { name: 'Charlie', date: '2024-05-03', comment: 'Will buy again.' }
  ];

  function updateReviewCard(index) {
    const review = reviews[index];
    document.getElementById('review-name').textContent = review.name;
    document.getElementById('review-date').textContent = review.date;
    document.getElementById('review-comment').textContent = review.comment;
  }

  document.getElementById('next-button').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReviewCard(currentReviewIndex);
  });

  document.getElementById('prev-button').addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateReviewCard(currentReviewIndex);
  });

  // Initialize with the first review
  updateReviewCard(currentReviewIndex);
});
