// Get all button and content elements
const showBtn = document.getElementById('showBtn');
const contentDiv = document.getElementById('contentDiv');
const changeBtn = document.getElementById('changeBtn');
const backBtn = document.getElementById('backBtn');
const contentImage = document.getElementById('contentImage');
const contentPara = document.getElementById('contentPara');

// Content variations for Change Content button
const contentVariations = [
    {
        image: 'src/Cup of coffee.jpg',
        text: 'This is a delicious cup of coffee! Perfect for starting your day with energy and focus. Made from premium beans roasted to perfection.',
        alt: 'Coffee'
    },
    {
        image: 'src/Laptop.jpg',
        text: 'A beautiful laptop ready for coding! This powerful machine will help you create amazing web applications and JavaScript projects.',
        alt: 'Laptop'
    },
    {
        image: 'src/Mountains.jpg',
        text: 'Fresh mountain air and stunning views! Nature provides the perfect backdrop for relaxation and inspiration.',
        alt: 'Mountains'
    }
];

let currentContentIndex = 0;

// Show More button functionality
showBtn.addEventListener('click', function() {
    contentDiv.style.display = 'block';
    showBtn.style.display = 'none';
});

// Change Content button functionality
changeBtn.addEventListener('click', function() {
    // Move to next content variation
    currentContentIndex = (currentContentIndex + 1) % contentVariations.length;
    
    // Update image and paragraph
    const currentContent = contentVariations[currentContentIndex];
    contentImage.src = currentContent.image;
    contentImage.alt = currentContent.alt;
    contentPara.textContent = currentContent.text;
});

// Back button functionality
backBtn.addEventListener('click', function() {
    contentDiv.style.display = 'none';
    showBtn.style.display = 'block';
});
