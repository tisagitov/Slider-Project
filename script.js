let slides = [
    {
        city: 'Rostov-on-Don <br/>LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        imgSrc: './img/completed-projects-1.png',
        altText: 'Image of the completed project in Rostov-on-Don, Admiral'  
    },
    {
        city: 'Sochi <br/>Thieves',
        area: '105 m2',
        time: '4 months',
        imgSrc: './img/completed-projects-2.png',
        altText: 'Image of the completed project in Sochi, Thieves'  
    },
    {
        city: 'Rostov-on-Don <br/>Patriotic',
        area: '93 m2',
        time: '3 months',
        imgSrc: './img/completed-projects-3.png',
        altText: 'Image of the completed project in Rostov-on-Don, Patriotic'  
    },
]

const details = document.querySelectorAll('.show-projects__detail-p');
const leftArrow = document.querySelector('.show-projects__left-arrow');
const rightArrow = document.querySelector('.show-projects__right-arrow');
const sliderBtns = document.querySelectorAll('.show-projects__button');
const imgDiv = document.querySelector('.show-projects__image');
const labels = document.querySelectorAll('.show-projects__project-name');

let currentSlide = 0;

showSlide(currentSlide);

leftArrow.addEventListener('click', () => {
    if (currentSlide === 0) {
        showSlide(slides.length - 1)
    } else {
        showSlide(currentSlide - 1)
    }
});

rightArrow.addEventListener('click', () => {
    if (currentSlide === (slides.length - 1)) {
        showSlide(0)
    } else {
        showSlide(currentSlide + 1)
    }
});

sliderBtns.forEach((item, index) => item.addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(index);
}));

labels.forEach((item, index) => item.addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(index);
}));

function showSlide(index) {
    details[0].innerHTML = `${slides[index].city}`;
    details[1].innerHTML = `${slides[index].area}`;
    details[2].innerHTML = `${slides[index].time}`;
    imgDiv.innerHTML = `<img src="${slides[index].imgSrc}" alt="${slides[index].altText}"/>`;
    sliderBtns.forEach(item => {
        item.classList.remove('show-projects__button--active')
    });
    sliderBtns[index].classList.add('show-projects__button--active');
    labels.forEach(item => {
        item.classList.remove('show-projects__project-name--active')
    });
    labels[index].classList.add('show-projects__project-name--active');
    currentSlide = index;
}
