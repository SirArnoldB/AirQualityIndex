const renderAqi = async () => {

    // Get the aqi data from the server, using the fetch API
    const response = await fetch('/aqi');
    const aqiData = await response.json();

    // Render the aqi data in the main container
    const main = document.querySelector('#main-content');

    // aqi container
    const aqiContainer = document.createElement('div');
    aqiContainer.classList.add('aqi-container');
    aqiContainer.classList.add('container');

    // aqi title
    const aqiTitle = document.createElement('h2');
    aqiTitle.innerText = 'Air Quality Indexes (AQIs) around the world';
    aqiTitle.id = 'explore-aqis-section';
    aqiTitle.classList.add('aqi-title');

    // aqi cards container
    const aqiCardsContainer = document.createElement('div');
    aqiCardsContainer.classList.add('aqi-cards-container');

    // aqi cards
    aqiData.forEach((cityData) => {

        const aqiCard = document.createElement('div');
        aqiCard.classList.add('aqi-card');

        const aqiName = document.createElement('h3');
        aqiName.innerText = cityData.city_name;

        const aqiOverall = document.createElement('p');
        aqiOverall.innerText = `Overall AQI: ${cityData.overall_aqi}`;

        const aqiCategory = document.createElement('p');
        aqiCategory.innerText = `AQI Category: ${cityData.aqi_category}`;

        const exploreButton = document.createElement('button');
        exploreButton.innerText = 'Explore';
        exploreButton.addEventListener('click', () => {
            window.location = `/aqi/${cityData.id}/${cityData.city_name}`;
        })

        aqiCard.appendChild(aqiName);
        aqiCard.appendChild(aqiOverall);
        aqiCard.appendChild(aqiCategory);
        aqiCard.appendChild(exploreButton);

        aqiCard.classList.add(cityData.aqi_category?.toLowerCase().replace(/\s/g, '-'));

        aqiCardsContainer.appendChild(aqiCard);
    })

    aqiContainer.appendChild(aqiTitle);
    aqiContainer.appendChild(aqiCardsContainer);

    main.appendChild(aqiContainer);
};


const requestedURL = window.location.href.split('/').pop();
if (requestedURL) {
    window.location = `/404.html`;
} else {
    renderAqi();
}

