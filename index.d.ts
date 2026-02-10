export interface City {
    id: string;
    name_en: string;
    name_si: string;
    name_ta: string;
    postcode: string;
    latitude: string;
    longitude: string;
}

/**
 * Get all postal code data.
 * @returns {City[]} Array of all cities.
 */
export function getAll(): City[];

/**
 * Get postal code data by city name.
 * @param {string} cityName - The name of the city (case-insensitive).
 * @returns {City[]} Array of matching city objects.
 */
export function getByCity(cityName: string): City[];

/**
 * Get postal code data by postal code.
 * @param {string|number} code - The postal code.
 * @returns {City[]} Array of matching city objects.
 */
export function getByCode(code: string | number): City[];

/**
 * Search for cities matching a query string.
 * @param {string} query - The search query.
 * @returns {City[]} Array of matching city objects.
 */
export function search(query: string): City[];
