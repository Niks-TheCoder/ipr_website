const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Development helper route to decode Clerk JWT
router.post('/verify', (req, res) => {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({ error: 'Token is required' });
    }

    // In a real app, you'd verify the Clerk JWT properly
    // For development, we'll just decode without verification
    const decoded = jwt.decode(token);
    
    res.json({ 
      success: true, 
      claims: decoded,
      message: 'Token decoded successfully (development mode)'
    });
  } catch (error) {
    res.status(400).json({ error: 'Invalid token', details: error.message });
  }
});

module.exports = router;
