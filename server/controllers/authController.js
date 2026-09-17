import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../config/db.js';

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide name, email, and password.' });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Check if user already exists
    const existingUsers = await query('SELECT * FROM users WHERE email = ?', [trimmedEmail]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ error: 'An account with this email already exists.' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert user into MySQL
    const result = await query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name.trim(), trimmedEmail, hashedPassword]
    );

    const userId = result.insertId;

    // Generate JWT token
    const token = jwt.sign(
      { id: userId, email: trimmedEmail, name: name.trim() },
      process.env.JWT_SECRET || 'cinefinder_jwt_secret_key',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Account created successfully',
      token,
      user: {
        id: userId,
        name: name.trim(),
        email: trimmedEmail,
      },
    });
  } catch (error) {
    console.error('Signup Error:', error);
    const errorMsg = error.message?.includes('MySQL Connection Error')
      ? error.message
      : 'Internal server error during registration.';
    res.status(500).json({ error: errorMsg });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please enter your email and password.' });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Find user by email
    const users = await query('SELECT * FROM users WHERE email = ?', [trimmedEmail]);
    if (users.length === 0) {
      return res.status(400).json({ error: 'Account not found. Please sign up first.' });
    }

    const user = users[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET || 'cinefinder_jwt_secret_key',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    const errorMsg = error.message?.includes('MySQL Connection Error')
      ? error.message
      : 'Internal server error during login.';
    res.status(500).json({ error: errorMsg });
  }
};

export const getMe = async (req, res) => {
  try {
    const users = await query('SELECT id, name, email, created_at FROM users WHERE id = ?', [req.user.id]);
    if (users.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json({ user: users[0] });
  } catch (error) {
    console.error('GetMe Error:', error);
    res.status(500).json({ error: 'Internal server error fetching user data.' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Check if email is already in use by another user
    const existing = await query('SELECT id FROM users WHERE email = ? AND id != ?', [trimmedEmail, userId]);
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Email address is already in use by another account.' });
    }

    await query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name.trim(), trimmedEmail, userId]);

    // Generate updated JWT token
    const token = jwt.sign(
      { id: userId, email: trimmedEmail, name: name.trim() },
      process.env.JWT_SECRET || 'cinefinder_jwt_secret_key',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Profile details updated successfully.',
      token,
      user: {
        id: userId,
        name: name.trim(),
        email: trimmedEmail,
      },
    });
  } catch (error) {
    console.error('UpdateProfile Error:', error);
    res.status(500).json({ error: 'Failed to update profile details.' });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current password and new password are required.' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'New password must be at least 8 characters long.' });
    }

    // Get user password hash
    const users = await query('SELECT password FROM users WHERE id = ?', [userId]);
    if (users.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const isMatch = await bcrypt.compare(currentPassword, users[0].password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Incorrect current password.' });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await query('UPDATE users SET password = ? WHERE id = ?', [hashedNewPassword, userId]);

    res.status(200).json({ message: 'Password updated successfully.' });
  } catch (error) {
    console.error('UpdatePassword Error:', error);
    res.status(500).json({ error: 'Failed to update password.' });
  }
};
