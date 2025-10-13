// Simple Express server setup
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the frontend folder
app.use(express.static('../frontend'));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
