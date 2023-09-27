const renderAqiDetails = async () => {

    // Get the aqi id from the url
    const aqiId = window.location.href.split('/').at(-2);

    // Get the aqi data from the server, using the fetch API
    const response = await fetch(`/aqi/${aqiId}`);
    const aqiCityData = await response.json();

    // Render the aqi data in the main container
    const main = document.querySelector('#main-content');

    // aqi container
    const aqiContainer = document.createElement('div');
    aqiContainer.classList.add('aqi-container');
    aqiContainer.classList.add('container');

    // aqi title
    const aqiTitle = document.createElement('h2');
    aqiTitle.innerText = `${aqiCityData.city_name} Air Quality Index`;
    aqiTitle.id = 'explore-aqis-section';
    aqiTitle.classList.add('aqi-title');

    // aqi card
    const aqiCard = document.createElement('div');
    aqiCard.classList.add('aqi-card');

    const aqiName = document.createElement('h3');
    aqiName.innerText = aqiCityData.city_name;

    const aqiOverall = document.createElement('p');
    aqiOverall.innerText = `Overall AQI: ${aqiCityData.overall_aqi}`;

    const aqiCategoryElement = document.createElement('p');
    aqiCategoryElement.innerText = `AQI Category: ${aqiCityData.aqi_category}`;

    // Pollutants container
    const pollutantsContainer = document.createElement('div');
    pollutantsContainer.classList.add('pollutants-container');

    // Pollutants title
    const pollutantsTitle = document.createElement('h3');
    pollutantsTitle.innerText = 'Pollutants';

    // Pollutants cards container
    const pollutantsCardsContainer = document.createElement('div');
    pollutantsCardsContainer.classList.add('pollutants-cards-container');

    // 1. Carbon Monoxide (CO)
    const carbonMonoxideCard = document.createElement('div');
    carbonMonoxideCard.classList.add('pollutant-card');

    const carbonMonoxideName = document.createElement('h4');
    carbonMonoxideName.innerText = 'Carbon Monoxide (CO)';

    const carbonMonoxideConcentration = document.createElement('p');
    carbonMonoxideConcentration.innerText = `Concentration: ${aqiCityData.co_concentration}`;

    const carbonMonoxideAqi = document.createElement('p');
    carbonMonoxideAqi.innerText = `AQI: ${aqiCityData.co_aqi}`;

    carbonMonoxideCard.appendChild(carbonMonoxideName);
    carbonMonoxideCard.appendChild(carbonMonoxideConcentration);
    carbonMonoxideCard.appendChild(carbonMonoxideAqi);

    // 2. Nitrogen Dioxide (NO2)
    const nitrogenDioxideCard = document.createElement('div');
    nitrogenDioxideCard.classList.add('pollutant-card');

    const nitrogenDioxideName = document.createElement('h4');
    nitrogenDioxideName.innerText = 'Nitrogen Dioxide (NO2)';

    const nitrogenDioxideConcentration = document.createElement('p');
    nitrogenDioxideConcentration.innerText = `Concentration: ${aqiCityData.no2_concentration}`;

    const nitrogenDioxideAqi = document.createElement('p');
    nitrogenDioxideAqi.innerText = `AQI: ${aqiCityData.no2_aqi}`;

    nitrogenDioxideCard.appendChild(nitrogenDioxideName);
    nitrogenDioxideCard.appendChild(nitrogenDioxideConcentration);
    nitrogenDioxideCard.appendChild(nitrogenDioxideAqi);

    // 3. Ozone (O3)
    const ozoneCard = document.createElement('div');
    ozoneCard.classList.add('pollutant-card');

    const ozoneName = document.createElement('h4');
    ozoneName.innerText = 'Ozone (O3)';

    const ozoneConcentration = document.createElement('p');
    ozoneConcentration.innerText = `Concentration: ${aqiCityData.o3_concentration}`;

    const ozoneAqi = document.createElement('p');
    ozoneAqi.innerText = `AQI: ${aqiCityData.o3_aqi}`;

    ozoneCard.appendChild(ozoneName);
    ozoneCard.appendChild(ozoneConcentration);
    ozoneCard.appendChild(ozoneAqi);

    // 4. Sulfur Dioxide (SO2)
    const sulfurDioxideCard = document.createElement('div');
    sulfurDioxideCard.classList.add('pollutant-card');

    const sulfurDioxideName = document.createElement('h4');
    sulfurDioxideName.innerText = 'Sulfur Dioxide (SO2)';

    const sulfurDioxideConcentration = document.createElement('p');
    sulfurDioxideConcentration.innerText = `Concentration: ${aqiCityData.so2_concentration}`;

    const sulfurDioxideAqi = document.createElement('p');
    sulfurDioxideAqi.innerText = `AQI: ${aqiCityData.so2_aqi}`;

    sulfurDioxideCard.appendChild(sulfurDioxideName);
    sulfurDioxideCard.appendChild(sulfurDioxideConcentration);
    sulfurDioxideCard.appendChild(sulfurDioxideAqi);

    // 5. PM2.5
    const pm2_5Card = document.createElement('div');
    pm2_5Card.classList.add('pollutant-card');

    const pm2_5Name = document.createElement('h4');
    pm2_5Name.innerText = 'PM2.5';

    const pm2_5Concentration = document.createElement('p');
    // concentration has PM2.5.concentration
    pm2_5Concentration.innerText = `Concentration: ${aqiCityData.pm25_oncentration}`;

    const pm2_5Aqi = document.createElement('p');
    pm2_5Aqi.innerText = `AQI: ${aqiCityData.pm25_aqi}`;

    pm2_5Card.appendChild(pm2_5Name);
    pm2_5Card.appendChild(pm2_5Concentration);
    pm2_5Card.appendChild(pm2_5Aqi);

    // 6. PM10
    const pm10Card = document.createElement('div');
    pm10Card.classList.add('pollutant-card');

    const pm10Name = document.createElement('h4');
    pm10Name.innerText = 'PM10';

    const pm10Concentration = document.createElement('p');
    pm10Concentration.innerText = `Concentration: ${aqiCityData.pm10_concentration}`;

    const pm10Aqi = document.createElement('p');
    pm10Aqi.innerText = `AQI: ${aqiCityData.pm10_aqi}`;

    pm10Card.appendChild(pm10Name);
    pm10Card.appendChild(pm10Concentration);
    pm10Card.appendChild(pm10Aqi);

    pollutantsCardsContainer.appendChild(carbonMonoxideCard);
    pollutantsCardsContainer.appendChild(nitrogenDioxideCard);
    pollutantsCardsContainer.appendChild(ozoneCard);
    pollutantsCardsContainer.appendChild(sulfurDioxideCard);
    pollutantsCardsContainer.appendChild(pm2_5Card);
    pollutantsCardsContainer.appendChild(pm10Card);

    pollutantsContainer.appendChild(pollutantsTitle);
    pollutantsContainer.appendChild(pollutantsCardsContainer);

    aqiCard.appendChild(aqiName);
    aqiCard.appendChild(aqiOverall);
    aqiCard.appendChild(aqiCategoryElement);
    aqiCard.appendChild(pollutantsContainer);

    aqiContainer.appendChild(aqiTitle);
    aqiContainer.appendChild(aqiCard);

    main.appendChild(aqiContainer);
}

renderAqiDetails();