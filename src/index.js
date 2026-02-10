const cities = require('./data.json');

/**
 * Get all postal code data.
 * @returns {Array} Array of city objects.
 */
function getAll() {
    return cities;
}

/**
 * Get postal code data by city name.
 * @param {string} cityName - The name of the city (case-insensitive).
 * @returns {Array} Array of matching city objects.
 */
function getByCity(cityName) {
    if (!cityName) return [];
    const normalizedName = cityName.toLowerCase().trim();
    return cities.filter(city =>
        (city.name_en && city.name_en.toLowerCase() === normalizedName) ||
        (city.name_si && city.name_si.toLowerCase() === normalizedName) ||
        (city.name_ta && city.name_ta.toLowerCase() === normalizedName)
    );
}

/**
 * Get postal code data by postal code.
 * @param {string|number} code - The postal code.
 * @returns {Array} Array of matching city objects.
 */
function getByCode(code) {
    if (!code) return [];
    const strCode = String(code).trim();
    return cities.filter(city => city.postcode === strCode);
}


/**
 * Search for cities matching a query string.
 * @param {string} query - The search query.
 * @returns {Array} Array of matching city objects.
 */
function search(query) {
    if (!query) return [];
    const normalizedQuery = query.toLowerCase().trim();
    return cities.filter(city =>
        (city.name_en && city.name_en.toLowerCase().includes(normalizedQuery)) ||
        (city.name_si && city.name_si.toLowerCase().includes(normalizedQuery)) ||
        (city.name_ta && city.name_ta.toLowerCase().includes(normalizedQuery)) ||
        (city.postcode && city.postcode.includes(normalizedQuery))
    );
}

module.exports = {
    getAll,
    getByCity,
    getByCode,
    search
};
