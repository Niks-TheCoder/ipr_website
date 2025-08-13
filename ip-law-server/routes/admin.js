const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// In-memory session storage (use Redis in production)
const activeSessions = new Set();

router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // Check hardcoded credentials
    if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate session token
    const sessionToken = jwt.sign(
      { 
        username,
        role: 'admin',
        timestamp: Date.now()
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Store session in memory
    activeSessions.add(sessionToken);

    res.json({
      success: true,
      token: sessionToken,
      message: 'Admin login successful'
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
});

router.post('/logout', (req, res) => {
  try {
    const { token } = req.body;
    activeSessions.delete(token);
    res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Logout failed' });
  }
});

router.get('/verify', (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token || !activeSessions.has(token)) {
      return res.status(401).json({ error: 'Invalid or expired session' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ success: true, admin: decoded });
  } catch (error) {
    res.status(401).json({ error: 'Session verification failed' });
  }
});

module.exports = router;
