const aqiCategories = [
    {
        name: 'Good',
        range: [0, 50],
        color: '#009966'
    },
    {
        name: 'Moderate',
        range: [51, 100],
        color: '#ffde33'
    },
    {
        name: 'Unhealthy for Sensitive Groups',
        range: [101, 150],
        color: '#ff9933'
    },
    {
        name: 'Unhealthy',
        range: [151, 200],
        color: '#cc0033'
    },
    {
        name: 'Very Unhealthy',
        range: [201, 300],
        color: '#660099'
    },
    {
        name: 'Hazardous',
        range: [301, 500],
        color: '#7e0023'
    }
];
export default aqiCategories;