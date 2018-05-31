const thaiData = require("./thai.json")["th-TH"]
const fs = require("fs")
const path = require("path")
const product = require("../src/static/mockData/product.json")

function findAndReplace(object, value, replacevalue) {
    for (var x in object) {
        if (typeof object[x] == typeof {}) {
            findAndReplace(object[x], value, replacevalue);
        }
        if (object[x] == value) {
            object[x] = replacevalue;
            // break; // uncomment to stop after first replacement
        }
    }
}
for (var data in thaiData) {
    findAndReplace(product, data, thaiData[data]);
}
// console.log(__dirname)
fs.writeFileSync(path.resolve(__dirname, "thai-product.json"), JSON.stringify(product))
