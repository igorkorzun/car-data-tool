// photo optimization

import fs, { mkdirSync } from 'fs';
import path from 'path';
import sharp from 'sharp';
import { UPLOADS_PATH, CARS_PATH, IMAGE_SIZES } from './config.js';
import { TEST_UPLOADS_PATH, TEST_CARS_PATH } from './config.js'; // test

async function optimizeImage(inputPath, outputPath, width) {
    await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
}

async function processCarImages(slug) {
    
    const uploadCarPath = path.join(TEST_UPLOADS_PATH, slug);
    const destCarPath = path.join(TEST_CARS_PATH, slug);

    if (!fs.existsSync(uploadCarPath)) {
        console.warn(`Upload folder for ${slug} does not exist.`);
        return;
    }

    if (!fs.existsSync(destCarPath)) fs.mkdirSync(destCarPath, { recursive: true });

    try {
        const coverSrs = path.join(uploadCarPath, 'cover');
        const coverDest = path.join(destCarPath, 'cover');
        if (fs.existsSync(coverSrs)) {
            fs.mkdirSync(coverDest, { recursive: true });
            const coverFiles = fs.readdirSync(coverSrs);
            for (const file of coverFiles) {
                const inputFile = path.join(coverSrs, file);
                const outputFile = path.join(coverDest, "main.webp");
                await optimizeImage(inputFile, outputFile, IMAGE_SIZES.cover);
            }
        }

        const gallerySrc = path.join(uploadCarPath, "gallery");
        const galleryDest = path.join(destCarPath, "gallery");
        if (fs.existsSync(gallerySrc)) {
            fs.mkdirSync(galleryDest, { recursive: true });
            const galleryFiles = fs.readdirSync(gallerySrc);
            let counter = 1;
            for (const file of galleryFiles) {
                const inputFile = path.join(gallerySrc, file);
                const outputFile = path.join(galleryDest, `${counter}.webp`);
                await optimizeImage(inputFile, outputFile, IMAGE_SIZES.gallery);
                counter++;
            }
        }

        fs.rmSync(uploadCarPath, { recursive: true, force: true });
        console.log(`Images for ${slug} processed & uploads removed.`);
    } catch (err) {
        console.error(`Error processing images for ${slug}: `, err.message)
    }
}

export async function processAllImages() {
    if (!fs.existsSync(TEST_UPLOADS_PATH)) return;

    const cars = fs.readdirSync(TEST_UPLOADS_PATH).filter(f =>
        fs.statSync(path.join(TEST_UPLOADS_PATH, f)).isDirectory()
    );

    for (const slug of cars) {
        await processCarImages(slug);
    }
}


