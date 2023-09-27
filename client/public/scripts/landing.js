// main container
const main = document.querySelector('#main-content');

// landing container
const landingContainer = document.createElement('div');
landingContainer.classList.add('landing-container');
landingContainer.classList.add('container');

// landing text
const landingText = document.createElement('p');
landingText.innerText = 'Welcome to the Air Quality Index page. Scroll down to explore AQIs.';

// landing image
const landingImage = document.createElement('img');
landingImage.src = './images/aqi-logos/png/logo-no-background.png';

// action button
const actionButton = document.createElement('button');
actionButton.innerText = 'Explore AQIs';
actionButton.addEventListener('click', () => {
    window.location = '/#explore-aqis-section';
})

landingContainer.appendChild(landingImage);
landingContainer.appendChild(landingText);
landingContainer.appendChild(actionButton);

main.appendChild(landingContainer);
