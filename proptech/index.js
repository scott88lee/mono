const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
const balaTable = JSON.parse(fs.readFileSync('balaTable.json', 'utf8'));

for (var i = 0; i < balaTable.length; i++) {
  console.log((99 - i) + " - " + balaTable[i]);
}

app.get('/balaTable', (req, res) => {
  console.log(req.query);
  let { lease, price } = req.query;
  let response = { propertyLease: lease, propertyPrice: price };

  console.log(lease);
  console.log(price);

  if (lease && price) {
    response.NewLaunch99Ratio = balaTable[0];
    response.BalaRatio = balaTable[99 - lease];

    response.FHNLPrice = price / balaTable[99 - lease];
    response.NNNLPrice = (balaTable[6] / balaTable[99 - lease] * price).toFixed(2);
  }

  res.send(response);
});

app.get('/', function (req, res) {
  res.send('Hello World!')
}
);

app.listen(port, () => console.log(`Proptech app listening on port ${port}!`));
