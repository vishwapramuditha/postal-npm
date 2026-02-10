const fs = require('fs');
const data = require('./src/data.json');

console.log(`Total entries: ${data.length}`);

const keys = Object.keys(data[0]);
const stats = {};

keys.forEach(key => {
    stats[key] = { nullCount: 0, distinctValues: new Set() };
});

data.forEach(item => {
    keys.forEach(key => {
        const val = item[key];
        if (val === "NULL" || val === null || val === "") {
            stats[key].nullCount++;
        } else {
            stats[key].distinctValues.add(val);
        }
    });
});

console.log('--- Field Statistics ---');
keys.forEach(key => {
    const isAlwaysNull = stats[key].nullCount === data.length;
    console.log(`${key}: ${stats[key].nullCount} nulls. Always null? ${isAlwaysNull}`);
});
