const express = require('express');
const app = express();
const port = 3000;

//read json file, balaTable.json
const fs = require('fs');
const balaTable = JSON.parse(fs.readFileSync('balaTable.json', 'utf8'));

for (var i = 0; i < balaTable.length; i++) {
    console.log((99-i) + " - " + balaTable[i]);
}

app.get('/balaTable', (req, res) => res.send(balaTable));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
);

app.listen(port, () => console.log(`Proptech app listening on port ${port}!`));
