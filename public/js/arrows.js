document.addEventListener('DOMContentLoaded', () => {
let currentIndex = 0;
const items = document.querySelectorAll('.item');
const carousel = document.querySelector('.carousel');
const itemsVisible = 5; // Show 3 items at a time

// Function to update the carousel transform
function updateCarousel() {
    const totalItems = items.length;
    const offset = -(currentIndex * (100 / itemsVisible)); // Calculate the translateX offset
    carousel.style.transform = `translateX(${offset}%)`; // Apply the translation
}

// Function to handle the left or right arrow click
function handleCarouselMove(toRight = true) {
    const totalItems = items.length;

    if (toRight) {
        currentIndex = (currentIndex + 1) % totalItems; // Move right
    } else {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move left
    }

    updateCarousel();
}

// Attach event listeners to the arrows
document.querySelector('.left-arrow').addEventListener('click', function() {
  console.log('Left arrow clicked');  
  handleCarouselMove(false); // Move left
});

document.querySelector('.right-arrow').addEventListener('click', function() {
  console.log('Right arrow clicked');  
  handleCarouselMove(true); // Move right
});

// Initialize the carousel position
updateCarousel();
});