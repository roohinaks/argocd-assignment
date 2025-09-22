const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async (req, res) => {
  console.log("Fetching from:", URL);
  try {
    const response = await fetch(URL, { method: 'GET' });
    if (!response.ok) throw new Error(`Backend returned ${response.status}`);
    const data = await response.json();
    res.render('index', { data });
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ msg: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});













