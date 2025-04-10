const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


function populateProductOptions() {
    const selectElement = document.getElementById('product-name'); 

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateProductOptions);

// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

// Function to update the review count
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
window.onload = loadReviewCount;