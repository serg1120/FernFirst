const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission (basic example)
app.post('/submit-quote', express.json(), (req, res) => {
  console.log('Quote request received:', req.body);
  
  // In production, you would:
  // 1. Validate the data
  // 2. Send email notification
  // 3. Save to database
  // 4. Integrate with CRM
  
  res.json({ 
    success: true, 
    message: 'Quote request received! We will contact you within 15 minutes.' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🌿 Fern First server running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});