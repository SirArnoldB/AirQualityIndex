import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import aqiCategories from './../data/aqi-categories.js';
import aqiData from './../data/aqi.json' assert { type: "json" };

// filename of the code being executed 
const __filename = fileURLToPath(import.meta.url);
// directory name of the script being executed 
const __dirname = path.dirname(__filename);

// router handler 
const router = express.Router();

// endpoint: /aqi
router.get('/', (req, res) => {
    res.status(200).json(aqiData);
});

// endpoint: /aqi/categories    
router.get('/categories', (req, res) => {
    res.status(200).json(aqiCategories);
})

// endpoint: /aqi/:aqiId
router.get('/:aqiId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/aqi-details.html'))
})

export default router;