import { pool } from "../config/database.js";

// Get all the cities and their AQI from the database
const getAllAqi = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM aqi ORDER BY city_name ASC');
        res.status(200).json(rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

// Get a city's AQI from the database
const getCityAqi = async (req, res) => {
    const { aqiId } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM aqi WHERE id = $1', [aqiId]);
        res.status(200).json(rows[0]);
    }
    catch (error) {
        res.status(409).json({ error: error.message });
    }
}

// Get AQI categories from the database
const getAqiCategories = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM aqi_categories ORDER BY range_min ASC');
        res.status(200).json(rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default { getAllAqi, getCityAqi, getAqiCategories }