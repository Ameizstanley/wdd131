// Function to update the review count in localStorage
function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount') || 0; 
    reviewCount = parseInt(reviewCount) + 1; 
    localStorage.setItem('reviewCount', reviewCount); 
    document.getElementById('reviewCountDisplay').textContent = reviewCount; 
}

// Function to load the review count on page load
function loadReviewCount() {
    const reviewCount = localStorage.getItem('reviewCount') || 0; 
    document.getElementById('reviewCountDisplay').textContent = reviewCount; 
}

// Ensure the review count is loaded when the page is ready
document.addEventListener('DOMContentLoaded', loadReviewCount);