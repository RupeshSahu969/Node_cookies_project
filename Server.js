const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('secret_key')); // use a secret key for signed cookies

// Setting a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'JohnDoe', { maxAge: 900000, httpOnly: true });
  res.send('Cookie is set');
});

app.get('/get-cookie', (req, res) => {
  const cookies = req.cookies;
  res.send(cookies);
});

const { body, validationResult } = require('express-validator');


  

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
