// reading CSV

import fs from "fs";
import Papa from "papaparse";
import { CSV_PATH } from "./config.js";

export function parseCSV() {
    // const file = fs.readFileSync(CSV_PATH, "utf8");
    const file = fs.readFileSync("./cars.csv", "utf8"); // test
    console.log("file: ", file); // test
    const result = Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
    });
    console.log("result: ", result); // test
    console.log("result.data: ", result.data); // test
    return result.data;
}

console.log(parseCSV()); // test