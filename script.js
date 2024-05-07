// Product Slider
const productList = document.querySelector('.product-list');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    changeSlide(1);
});
prevBtn.addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    const totalProducts = productList.children.length;
    const productWidth = productList.children[0].offsetWidth;
    currentSlide += direction;
    if (currentSlide >= totalProducts) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalProducts - 1;
    }
    productList.style.transform = `translateX(-${currentSlide * productWidth}px)`;
}

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email-input');
    const responseMessage = document.getElementById('response-message');

    // Simulate an API call
    setTimeout(() => {
        responseMessage.textContent = `Thank you for subscribing, ${emailInput.value}!`;
        emailInput.value = ''; // Clear the input after sending
    }, 500);
});

