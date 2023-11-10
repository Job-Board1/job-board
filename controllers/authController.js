const User = require('../models/User');

const signUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.json({ success: false, message: 'Error registering user' });
  }
};

const signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true, message: 'User signed in successfully' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.json({ success: false, message: 'Error signing in' });
  }
};

module.exports = { signUp, signIn };
