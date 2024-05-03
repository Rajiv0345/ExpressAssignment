const express = require('express');
const app = express();
const PORT = 3003;

// Endpoint to generate and send a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  res.json({ randomNumber });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
