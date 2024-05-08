"use strict";
const partCode = "XYZ:1234-l";

function parsePartCode(partCode) {
  const parsePartCode = {
    supplier: partCode.split(":")[0],
    productNumber: partCode.split("-")[0].split(":")[1],
    size: partCode.split("-")[1],
  };
  return parsePartCode;
}

const { supplier, productNumber, size } = parsePartCode(partCode);

console.log(`Supplier: ${supplier},\nProduct number: ${productNumber},\nsize: ${size}
`);
