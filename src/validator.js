// data validator

export function validate(car) {
    const requiredFields = [
        "slug",
        "brand",
        "model",
        "year",
        "engine",
        "drive",
        "transmission",
        "body",
        "class",
        "seats",
        "delivery",
        "insurance",
        "price_day",
        "mileage_per_day",
        "extra-km-price"
    ];

    for (const field of requiredFields) {
        if (!car[field] && car[field] !== 0) {
            throw new Error(`Car missing required field: ${field}`);
        }
    }
}