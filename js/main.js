const doc = document;
const sliderSlides = doc.querySelector('.slider__slides');
const sliderBtnPrev = doc.querySelector('.slider-btn_prev');
const sliderBtnNext = doc.querySelector('.slider-btn_next');
const sliders = Array.from(sliderSlides.querySelectorAll('div'));
const slideCount = sliders.length;
let slideIndex = 0;

//встановлюємо обробники подій для кнопок
sliderBtnPrev.addEventListener('click', showPreviousSlide);
sliderBtnNext.addEventListener('click', showNextSlide);

//Функція для показу попереднего слайду
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функція для показу наступного слайду
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функція для оновлення відображення слайдера
function updateSlider() {
    sliders.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Ініціалізація слайдера
updateSlider();