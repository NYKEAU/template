import {tns} from '../node_modules/tiny-slider/src/tiny-slider.js';

const response = await fetch('http://127.0.0.1:81/template/PHP/showReviews.php');
const reviews = await response.json();

console.log(reviews);

function renderReviewList() {
    let render = "";

    for(let review of reviews) {
        render = render + renderReview(review);
    }

    return render;
}

function renderReview(data) {
    let review = `<div class="review tns-item">
                        <div class="top">
                            <i class="fa-solid fa-user fa-2xl"></i>
                            <h3>${data.name}</h3>
                        </div>
                        <p>${data.review}</p>
                        <div class="stars">
                            ${renderStars(data.stars)}
                        </div>
                    </div>`

    return review;
}

function renderStars(stars) {
    var allStars = "";
    var starsNumber = parseFloat(stars);

    if(Number.isInteger(starsNumber)) {
        for(let i=0; i<starsNumber; i++) {
            allStars = allStars + `<i class="fa-solid fa-star"></i>`;
        }
    } else {
        for(let i=0; i<starsNumber-0.5; i++) {
            allStars = allStars + `<i class="fa-solid fa-star"></i>`;
        }
        allStars = allStars + `<i class="fa-solid fa-star-half"></i>`
    }

    return allStars;
}

window.onload = function() {
    let cards = document.getElementById('reviews');

    cards.innerHTML += renderReviewList();

    loadSlider();
}

function loadSlider() {
    var slider = tns({
        nav: false,
        controls: false,
        autoplayButtonOutput: false,
        controlsContainer: false,
        container: '.reviews',
        loop: false,
        rewind: true,
        speed: 2000,
        fixedWidth: 275,
        autoplay: true,
        autoplayTimeout: 3000
    })

    return slider;
}