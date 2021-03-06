// Variables

const admiralInfo = document.getElementById('admiral-info');
const sochiInfo = document.getElementById('sochi-info');
const patrioticInfo = document.getElementById('patriotic-info');
const leftArrow = document.querySelector('.show-projects__left-arrow');
const rightArrow = document.querySelector('.show-projects__right-arrow');
const leftBtn = document.getElementById('left-btn');
const middleBtn = document.getElementById('middle-btn');
const rightBtn = document.getElementById('right-btn');
const admiralLabel = document.getElementById('admiral-label');
const sochiLabel = document.getElementById('sochi-label');
const patrioticLabel = document.getElementById('patriotic-label');
const admiralImage = document.getElementById('admiral-image');
const sochiImage = document.getElementById('sochi-image');
const patrioticImage = document.getElementById('patriotic-image');

// Listeners

rightArrow.addEventListener('click', () => {
    if (leftBtn.classList.contains('show-projects__button--active')) {
        showSochi()
    } else if (middleBtn.classList.contains('show-projects__button--active')) {
        showPatriotic()
    } else {
        showAdmiral()
    }
})

leftArrow.addEventListener('click', () => {
    if (leftBtn.classList.contains('show-projects__button--active')) {
        showPatriotic()
    } else if (middleBtn.classList.contains('show-projects__button--active')) {
        showAdmiral()
    } else {
        showSochi()
    }
})

leftBtn.addEventListener('click', showAdmiral);
middleBtn.addEventListener('click', showSochi);
rightBtn.addEventListener('click', showPatriotic);

admiralLabel.addEventListener('click', showAdmiral);
sochiLabel.addEventListener('click', showSochi);
patrioticLabel.addEventListener('click', showPatriotic);

// Functions

function showAdmiral() {
    admiralInfo.classList.remove('show-projects__details--hidden');
    sochiInfo.classList.add('show-projects__details--hidden');
    patrioticInfo.classList.add('show-projects__details--hidden');

    admiralLabel.classList.add('show-projects__project-name--active');
    sochiLabel.classList.remove('show-projects__project-name--active');
    patrioticLabel.classList.remove('show-projects__project-name--active');

    leftBtn.classList.add('show-projects__button--active');
    middleBtn.classList.remove('show-projects__button--active');
    rightBtn.classList.remove('show-projects__button--active');

    admiralImage.classList.remove('show-projects__image--hidden');
    sochiImage.classList.add('show-projects__image--hidden');
    patrioticImage.classList.add('show-projects__image--hidden');
}

function showSochi() {
    sochiInfo.classList.remove('show-projects__details--hidden');
    admiralInfo.classList.add('show-projects__details--hidden');
    patrioticInfo.classList.add('show-projects__details--hidden');

    sochiLabel.classList.add('show-projects__project-name--active');
    admiralLabel.classList.remove('show-projects__project-name--active');
    patrioticLabel.classList.remove('show-projects__project-name--active');

    middleBtn.classList.add('show-projects__button--active');
    rightBtn.classList.remove('show-projects__button--active');
    leftBtn.classList.remove('show-projects__button--active');

    sochiImage.classList.remove('show-projects__image--hidden');
    admiralImage.classList.add('show-projects__image--hidden');
    patrioticImage.classList.add('show-projects__image--hidden');
}

function showPatriotic() {
    patrioticInfo.classList.remove('show-projects__details--hidden');
    admiralInfo.classList.add('show-projects__details--hidden');
    sochiInfo.classList.add('show-projects__details--hidden');

    patrioticLabel.classList.add('show-projects__project-name--active');
    admiralLabel.classList.remove('show-projects__project-name--active');
    sochiLabel.classList.remove('show-projects__project-name--active');

    rightBtn.classList.add('show-projects__button--active');
    middleBtn.classList.remove('show-projects__button--active');
    leftBtn.classList.remove('show-projects__button--active');

    patrioticImage.classList.remove('show-projects__image--hidden');
    admiralImage.classList.add('show-projects__image--hidden');
    sochiImage.classList.add('show-projects__image--hidden');
}