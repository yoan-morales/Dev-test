const sliderCards = document.querySelectorAll('.slider-card');
let currentIndex = 0;

function showSlide(index) {
    sliderCards.forEach((card, i) => {
        if (i === index) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

showSlide(currentIndex);

document.querySelector('.prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderCards.length) % sliderCards.length;
    showSlide(currentIndex);
});

document.querySelector('.next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderCards.length;
    showSlide(currentIndex); 
});