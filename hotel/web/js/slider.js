var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');

let currentSlide = 0; // Initialize currentSlide to 0

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    currentSlide = manual; // Update the current slide
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
    });
});

var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = currentSlide; // Start from the current slide

    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length === i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    };
    repeater();
};

repeat(); // Call the repeat function to start automatic sliding
