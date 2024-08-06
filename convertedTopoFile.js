const fs = require('fs');
const topojson = require('topojson-server');
const simplify = require('simplify-geojson');


const geojsonData = JSON.parse(fs.readFileSync('./output_geojson.geojson', 'utf8'));


const simplifiedGeojson = simplify(geojsonData, 0.001);


const topojsonData = topojson.topology(
    { collection: simplifiedGeojson },
    // { quantization: 1e5 }
);


fs.writeFileSync('topojson-file.json', JSON.stringify(topojsonData, null, 2));
