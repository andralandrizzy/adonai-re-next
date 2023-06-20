export async function fetchProperties() {
    const headers = {
        "X-RapidAPI-Key": `${process.env.X_RAP_KEY}`,
        "X-RapidAPI-Host": "trulia-real-estate-scraper.p.rapidapi.com",
    }

    const response = await fetch('https://trulia-real-estate-scraper.p.rapidapi.com/homes/listing_by_url?url=https%3A%2F%2Fwww.trulia.com%2FFL%2Fmiami&page=1',
        { headers: headers, });

    const result = await response.json()

    return result
}