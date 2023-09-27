import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import AqiController from '../controllers/aqi.js';

// filename of the code being executed 
const __filename = fileURLToPath(import.meta.url);
// directory name of the script being executed 
const __dirname = path.dirname(__filename);

// router handler 
const router = express.Router();

// endpoint: /aqi
router.get('/', AqiController.getAllAqi);

// endpoint: /aqi/categories    
router.get('/categories', AqiController.getAqiCategories);

// endpoint: /aqi/:aqiId
router.get('/:aqiId', AqiController.getCityAqi);

// endpoint: /aqi/:aqiId/:cityName
router.get('/:aqiId/:cityName', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/aqi-details.html'))
})

export default router;