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

app.post('/register',
  // Validation rules
  [
    body('username').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ],
  // Handle validation results
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Proceed with registration
    res.send('User registered successfully');
  }
);
  

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
