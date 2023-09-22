const renderAqi = async (aqi) => {

    // Get the aqi data from the server, using the fetch API
    const response = await fetch('/aqi');
    const aqiData = await response.json();

    // get the aqi categories from the server, using the fetch API
    const response2 = await fetch('/aqi/categories');
    const aqiCategories = await response2.json();

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
    for (const city in aqiData) {
        const cityData = JSON.parse(aqiData[city]);

        let cityAqiCategory = '';
        for (const category of aqiCategories) {
            if (cityData.overall_aqi >= category.range[0] && cityData.overall_aqi <= category.range[1]) {
                cityAqiCategory = category.name;
                break;
            }
        }

        const aqiCard = document.createElement('div');
        aqiCard.classList.add('aqi-card');

        const aqiName = document.createElement('h3');
        aqiName.innerText = city;

        const aqiOverall = document.createElement('p');
        aqiOverall.innerText = `Overall AQI: ${cityData.overall_aqi}`;

        const aqiCategory = document.createElement('p');
        aqiCategory.innerText = `AQI Category: ${cityAqiCategory}`;

        const exploreButton = document.createElement('button');
        exploreButton.innerText = 'Explore';
        exploreButton.addEventListener('click', () => {
            window.location = `/aqi/${city}`;
        })

        aqiCard.appendChild(aqiName);
        aqiCard.appendChild(aqiOverall);
        aqiCard.appendChild(aqiCategory);
        aqiCard.appendChild(exploreButton);

        aqiCard.classList.add(cityAqiCategory.toLowerCase().replace(/\s/g, '-'));

        aqiCardsContainer.appendChild(aqiCard);
    }

    aqiContainer.appendChild(aqiTitle);
    aqiContainer.appendChild(aqiCardsContainer);

    main.appendChild(aqiContainer);
};

renderAqi();

