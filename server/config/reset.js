import { pool } from './database.js';
import './dotenv.js';
import aqiCategories from '../data/aqi-categories.js';
import aqiData from '../data/aqi.json' assert { type: "json" };

// Create the aqi_categories table
const createAqiCategoriesTable = async () => {
    const createAqiCategoriesTableQuery = `
    DROP TABLE IF EXISTS aqi_categories;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS aqi_categories(
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255),
        range_min INTEGER,
        range_max INTEGER,
        color VARCHAR(255)
    );
    `;

    try {
        const res = await pool.query(createAqiCategoriesTableQuery);
        console.log('🚀 aqi_categories table created successfully');
    } catch (error) {
        console.error('🚨 error creating aqi_categories table', error);
    }
}

// Seed the aqi_categories table with data from aqi-categories.js file
const seedAqiCategoriesTable = async () => {
    await createAqiCategoriesTable();

    aqiCategories.forEach((category) => {
        const insertAqiCategoryQuery = {
            text: `INSERT INTO aqi_categories (name, range_min, range_max, color) VALUES ($1, $2, $3, $4)`,
            values: [category.name, category.range[0], category.range[1], category.color]
        }

        pool.query(insertAqiCategoryQuery, (err, res) => {
            if (err) {
                console.error('🚨 error inserting aqi category', err);
            } else {
                console.log('🚀 aqi category inserted successfully');
            }
        })
    })
}


// Seed the aqi_categories table
seedAqiCategoriesTable();

// Create the aqi table
const createAqiTable = async () => {
    const createAqiTableQuery = `
    DROP TABLE IF EXISTS aqi;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS aqi(
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        city_name VARCHAR(255),
        overall_aqi INTEGER,
        aqi_category VARCHAR(255),
        co_concentration REAL,
        co_aqi INTEGER,
        no2_concentration REAL,
        no2_aqi INTEGER,
        o3_concentration REAL,
        o3_aqi INTEGER,
        so2_concentration REAL,
        so2_aqi INTEGER,
        pm25_concentration REAL,
        pm25_aqi INTEGER,
        pm10_concentration REAL,
        pm10_aqi INTEGER
    );
    `;

    try {
        const res = await pool.query(createAqiTableQuery);
        console.log('🚀 aqi table created successfully');
    } catch (error) {
        console.error('🚨 error creating aqi table', error);
    }
}

// Seed the aqi table with data from aqi.json file 
const seedAqiTable = async () => {
    await createAqiTable();

    for (const city in aqiData) {
        const cityData = JSON.parse(aqiData[city]);

        const insertAqiDataQuery = {
            text: `INSERT INTO aqi (city_name, overall_aqi, aqi_category, co_concentration, co_aqi, no2_concentration, no2_aqi, o3_concentration, o3_aqi, so2_concentration, so2_aqi, pm25_concentration, pm25_aqi, pm10_concentration, pm10_aqi) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
        }

        let cityAqiCategory = '';
        for (const category of aqiCategories) {
            if (cityData.overall_aqi >= category.range[0] && cityData.overall_aqi <= category.range[1]) {
                cityAqiCategory = category.name;
                break;
            }
        }

        const values = [
            city,
            cityData.overall_aqi,
            cityAqiCategory,
            cityData.CO.concentration,
            cityData.CO.aqi,
            cityData.NO2.concentration,
            cityData.NO2.aqi,
            cityData.O3.concentration,
            cityData.O3.aqi,
            cityData.SO2.concentration,
            cityData.SO2.aqi,
            cityData['PM2.5'].concentration,
            cityData['PM2.5'].aqi,
            cityData['PM10'].concentration,
            cityData['PM10'].aqi
        ];

        pool.query(insertAqiDataQuery, values, (err, res) => {
            if (err) {
                console.error('🚨 error inserting aqi data', err);
                return
            }
            console.log(`✅ ${city} aqi data inserted successfully`);
        })
    }
}

// Seed the aqi table
seedAqiTable(); 
