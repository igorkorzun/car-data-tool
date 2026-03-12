// path & settings

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const CSV_PATH = "/var/www/data/cars.csv";
export const JSON_PATH = "/var/www/data/cars.json";
export const UPLOADS_PATH = "/var/www/uploads";
export const CARS_PATH = "/var/www/data/cars"; // images

export const TEST_JSON_PATH = path.resolve(__dirname, './cars.json'); // test
export const TEST_CSV_PATH = path.resolve(__dirname, './cars.csv'); // test

export const TEST_UPLOADS_PATH = path.resolve(__dirname, '../uploads');
export const TEST_CARS_PATH = path.resolve(__dirname, '../data/cars');


export const IMAGE_SIZES = {
    cover: 1600,
    gallery: 1200,
};