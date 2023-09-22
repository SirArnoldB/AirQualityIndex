// header container
const header = document.querySelector('header');
const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');

// header left 
const headerLeft = document.createElement('div');
headerLeft.classList.add('header-left');

const headerLogo = document.createElement('img');
headerLogo.src = '/public/images/aqi-logo-favicon.png';

// header title
const headerTitlte = document.createElement('h1');
headerTitlte.innerText = 'Air Quality Index';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitlte);

// header right
const headerRight = document.createElement('div');
headerRight.classList.add('header-right');

// Explore AQIs button
const exploreAQIsButton = document.createElement('button');
exploreAQIsButton.innerText = 'Explore AQIs';
exploreAQIsButton.addEventListener('click', () => {
    window.location = '/#explore-aqis-section';
})

headerRight.appendChild(exploreAQIsButton);

// Home button
const homeButton = document.createElement('button');
homeButton.innerText = 'Home';

homeButton.addEventListener('click', () => {
    window.location = '/';
})

headerRight.appendChild(homeButton);

// append left and right to header container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// append header container to header
header.appendChild(headerContainer);
