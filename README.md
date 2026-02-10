# Sri Lankan Postal Codes & Cities

![npm](https://img.shields.io/npm/v/sri-lanka-postal-codes)
![license](https://img.shields.io/npm/l/sri-lanka-postal-codes)
![build](https://github.com/vishwapramuditha/postal-npm/actions/workflows/test.yml/badge.svg)

**NPM Package:** [https://www.npmjs.com/package/sri-lanka-postal-codes](https://www.npmjs.com/package/sri-lanka-postal-codes)

A lightweight (optimized), zero-dependency npm package for developers to access Sri Lankan postal codes and city names. Fully typed with TypeScript support.

## Features

- ↯ **Complete Data**: Access over 2000+ Sri Lankan cities and postal codes.
- ↯ **Lightweight**: Optimized data for minimal bundle size impact.
- ↯ **Powerful Search**: Fuzzy search support for cities and codes.
- ↯ **TypeScript Ready**: Built-in type definitions for excellent developer experience.
- ↯ **Multilingual**: Supports Sinhala, Tamil, and English city names.
- ↯ **Zero Dependencies**: Keeps your project lean.

## Installation

```bash
npm install sri-lanka-postal-codes
```

## Usage

```javascript
const postal = require('sri-lanka-postal-codes');

// 1. Get all data
const allCities = postal.getAll();
console.log(`Loaded ${allCities.length} cities.`);

// 2. Get by City Name (Case insensitive, supports English, Sinhala, Tamil)
const colombo = postal.getByCity('Colombo');
const anuradhapura = postal.getByCity('අනුරාධපුරය'); // Sinhala
console.log(colombo);

// 3. Get by Postal Code
const piliyandala = postal.getByCode('10300');
console.log(piliyandala);

// 4. Search (Partial match, case insensitive)
// Great for autocomplete inputs!
const results = postal.search('Piliyan'); 
console.log(results);
```

## Data Structure

Each entry follows this TypeScript interface:

```typescript
interface City {
  id: string;
  name_en: string; // English Name
  name_si: string; // Sinhala Name
  name_ta: string; // Tamil Name
  postcode: string;
  latitude: string;
  longitude: string;
}
```

Example JSON output:
```json
{
  "id": "365",
  "name_en": "Piliyandala",
  "name_si": "පිළියන්දල",
  "name_ta": "பிலியந்தலை",
  "postcode": "10300",
  "latitude": "6.80175750",
  "longitude": "79.92273130"
}
```

## Contributing

Contributions are welcome! Please check out the [CONTRIBUTING.md](CONTRIBUTING.md) guide for details.

## License

MIT © Vishwa Pramuditha
