export async function fetchProperties() {
    const response = await fetch("http://localhost:3000/api/listings")

    const listings = await response.json();
    return listings;
}