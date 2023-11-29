let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
let slidetime = 5000;
let intervalId;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + offset + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
    resetInterval();
}

function nextSlide() {
    showSlide(currentIndex + 1);
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        nextSlide();
    }, slidetime);
}

// Initial setup
resetInterval();
