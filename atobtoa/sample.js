let data = 'stackabuse.com';
let buff = Buffer.from(data);
let base64data = buff.toString('base64');

console.log('"' + data + '" converted to Base64 is "' + base64data + '"');

