const express = require('express');
const app = express();

const strings = ['string1', 'string2', 'string3', 'string4']; // Replace with your list of strings

app.get('/mars-api', (req, res) => {
  const randomIndex = Math.floor(Math.random() * strings.length);
  const randomString = strings[randomIndex];
  res.json({ string: randomString });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
