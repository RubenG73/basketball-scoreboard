let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let homeCounter = 0;
let guestCounter = 0;


function plusOneHome() {
    homeCounter +=1;
    homeScore.textContent = homeCounter;
}

function plusTwoHome() {
    homeCounter +=2;
    homeScore.textContent = homeCounter;
}

function plusThreeHome() {
    homeCounter +=3;
    homeScore.textContent = homeCounter;
}

function plusOneGuest() {
    guestCounter +=1;
    guestScore.textContent = guestCounter;
}

function plusTwoGuest() {
    guestCounter +=2;
    guestScore.textContent = guestCounter;
}

function plusThreeGuest() {
    guestCounter +=3;
    guestScore.textContent = guestCounter;
}

function resetScore() {
    homeCounter = 0;
    guestCounter = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}