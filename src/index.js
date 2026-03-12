// pipeline

import fs from 'fs';
import { parseCSV } from './csvParser.js';
import { validateCar } from './validator.js';
import { normalizeCar } from './normalizer.js';
import { JSON_PATH } from './config.js';

import { TEST_JSON_PATH } from './config.js'; //test

import { processAllImages } from './imageProcessor.js';

async function run() {
    console.log('Reading CSV...');

    const rows = parseCSV();
    const cars = [];

    for (const row of rows) {
        try {
            validateCar(row);
            const car = normalizeCar(row);
            cars.push(car);
        } catch (err) {
            console.error('Validation error: ', err.message);
        }
    }

    // fs.writeFileSync(JSON_PATH, JSON.stringify(cars, null, 2));
    fs.writeFileSync(TEST_JSON_PATH, JSON.stringify(cars, null, 2)); // test
    console.log(`cars.json generated with ${cars.length} cats`);

    console.log("Processing image...");
    await processAllImages();
    console.log('All image processed.');
}

run();
