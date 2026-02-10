const assert = require('assert');
const { getAll, getByCity, getByCode, search } = require('../src/index');

console.log('Running tests...');

// Test getAll
const all = getAll();
assert(Array.isArray(all), 'getAll should return an array');
assert(all.length > 0, 'getAll should return non-empty array');
console.log(`✓ getAll returned ${all.length} entries`);

// Test getByCity
const colombos = getByCity('Colombo');
// Note: "Colombo" might be a district or city. Based on data, checking specific city might be safer.
// Let's try "Piliyandala" from the preview we saw earlier.
const piliyandala = getByCity('Piliyandala');
assert(piliyandala.length > 0, 'Should find Piliyandala');
assert.strictEqual(piliyandala[0].postcode, '10300', 'Piliyandala postcode should be 10300');
console.log('✓ getByCity("Piliyandala") passed');

// Test Case Insensitivity
const piliyandalaLower = getByCity('piliyandala');
assert.strictEqual(piliyandalaLower.length, piliyandala.length, 'Should be case insensitive');
console.log('✓ getByCity case insensitivity passed');

// Test getByCode
const code10300 = getByCode('10300');
assert(code10300.length > 0, 'Should find entries for 10300');
assert(code10300.some(c => c.name_en === 'Piliyandala'), 'Should contain Piliyandala');
console.log('✓ getByCode("10300") passed');

// Test search
const searchResult = search('Piliyan');
assert(searchResult.length > 0, 'Search should find partial matches');
assert(searchResult.some(c => c.name_en === 'Piliyandala'), 'Search should find Piliyandala');
console.log('✓ search("Piliyan") passed');

// Test sinhala search
// "අනුරාධපුරය"
const searchSi = search('අනුරාධපුරය');
assert(searchSi.length > 0, 'Should find Sinhala names');
console.log('✓ search Sinhala passed');

console.log('All tests passed!');
