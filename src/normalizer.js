// type normalizer

export function normalizeCar(row) {
    return {
        slug: row.slug,
        brand: row.brand,
        model: row.model,
        year: Number(row.year),
        engine: row.engine,
        drive: row.drive,
        transmission: row.transmission,
        body: row.body,
        class: row.class,
        seats: Number(row.seats),
        luggage: Number(row.luggage),
        delivery: row.delivery === "yes", // replacement? 
        price_day: Number(row.price_day),
        insurance: row.insurance === "yes", // replacement? 
        mileage_per_day: Number(row.mileage_per_day),
        extra_km_price: Number(row.extra_km_price),
        min_driver_exp: Number(row.min_driver_exp),
        min_driver_age: Number(row.min_driver_age),
        description: row.description
    };
}