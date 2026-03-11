// reading CSV

import fs from "fs";
import Papa from "papaparse";
import { CSV_PATH } from "./config.js";
import { TEST_CSV_PATH } from "./config.js"; // test

export function parseCSV() {
    // const file = fs.readFileSync(CSV_PATH, "utf8");
    const file = fs.readFileSync(TEST_CSV_PATH, "utf8"); // test
    // console.log("file: ", file); // test
    const result = Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
    });
    // console.log("result: ", result); // test
    // console.log("result.data: ", result.data); // test
    return result.data;
}

// console.log(parseCSV()); // test