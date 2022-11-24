const fs = require('fs');

const input = fs.readFileSync('stuff', 'utf8');

let buff = Buffer.from(input);
let base64data = buff.toString('base64');

console.log('"' + input + '" converted to Base64 is "' + base64data + '"');

fs.writeFileSync('blob', base64data);