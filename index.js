const express = require('express');
const app = express();

const strings = ['It\'s getting dark...', 'My day was productive...', 'I\'m happy to be helping science...', 'It\'s very lonely here...', 'I hope this day isn\'t my last...', 'The sunset is beautiful...', 'Martian soil is my home...']; // Replace with your list of strings

app.get('/mars-api', (req, res) => {
  const randomIndex = Math.floor(Math.random() * strings.length);
  const randomString = strings[randomIndex];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ string: randomString }));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
