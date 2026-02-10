const fs = require('fs');
const data = require('./src/data.json');

const optimizedData = data.map(item => ({
    id: item.id, // Keeping ID for potential future use or stability
    name_en: item.name_en,
    name_si: item.name_si,
    name_ta: item.name_ta,
    postcode: item.postcode,
    latitude: item.latitude,
    longitude: item.longitude
    // Removing district_id (redundant if not used for lookup), and sub_name fields
}));

fs.writeFileSync('./src/data.json', JSON.stringify(optimizedData)); // No whitespace for minification
console.log('Data optimization complete.');
