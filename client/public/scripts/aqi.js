const renderAqi = async () => {
    const response = await fetch('/aqi');
    const aqiData = await response.json();
    const main = document.querySelector('#main-content');

    const aqiContainer = document.createElement('div');
    aqiContainer.classList.add('aqi-container');
    aqiContainer.classList.add('container');

    const aqiTitle = document.createElement('h2');
    aqiTitle.innerText = 'Air Quality Indexes (AQIs) around the world';
    aqiTitle.id = 'explore-aqis-section';
    aqiTitle.classList.add('aqi-title');

    let filteredAqiData = aqiData;

    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search by city, AQI, or category...';
    searchBar.addEventListener('input', (event) => {
        const filterValue = event.target.value.toLowerCase();

        filteredAqiData = aqiData.filter((cityData) => {
            return cityData.city_name.toLowerCase().includes(filterValue) ||
                cityData.overall_aqi.toString().includes(filterValue) ||
                cityData.aqi_category.toLowerCase().includes(filterValue);
        });

        renderAqiCards(filteredAqiData);
    });

    const aqiCardsContainer = document.createElement('div');
    aqiCardsContainer.classList.add('aqi-cards-container');

    const renderAqiCards = (data) => {
        // Remove all existing aqi cards
        while (aqiCardsContainer.firstChild) {
            aqiCardsContainer.removeChild(aqiCardsContainer.firstChild);
        }

        data.forEach((cityData) => {
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
            });

            aqiCard.appendChild(aqiName);
            aqiCard.appendChild(aqiOverall);
            aqiCard.appendChild(aqiCategory);
            aqiCard.appendChild(exploreButton);

            aqiCard.classList.add(cityData.aqi_category?.toLowerCase().replace(/\s/g, '-'));

            aqiCardsContainer.appendChild(aqiCard);
        });
    }

    aqiContainer.appendChild(aqiTitle);
    aqiContainer.appendChild(searchBar);
    aqiContainer.appendChild(aqiCardsContainer);

    main.appendChild(aqiContainer);

    // Initial render
    renderAqiCards(aqiData);
};

const requestedURL = window.location.href.split('/').pop();
if (requestedURL) {
    window.location = `/404.html`;
} else {
    renderAqi();
}
