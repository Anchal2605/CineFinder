import { query } from '../config/db.js';

export const getHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const history = await query(
      'SELECT id, movie_id, title, poster_path AS image, rating, year, watched_at FROM watch_history WHERE user_id = ? ORDER BY watched_at DESC',
      [userId]
    );

    res.status(200).json({ history });
  } catch (error) {
    console.error('GetHistory Error:', error);
    res.status(500).json({ error: 'Internal server error fetching watch history.' });
  }
};

export const addToHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const { movie_id, title, image, rating, year } = req.body;

    if (!movie_id || !title) {
      return res.status(400).json({ error: 'Movie ID and Title are required.' });
    }

    // Check if already in history
    const existing = await query(
      'SELECT id FROM watch_history WHERE user_id = ? AND movie_id = ?',
      [userId, movie_id]
    );

    if (existing.length > 0) {
      // Update watched_at
      await query(
        'UPDATE watch_history SET watched_at = CURRENT_TIMESTAMP WHERE id = ?',
        [existing[0].id]
      );
      return res.status(200).json({ message: 'Watch history updated.' });
    }

    // Insert new watch history entry
    await query(
      'INSERT INTO watch_history (user_id, movie_id, title, poster_path, rating, year) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, movie_id, title, image || '', rating || '', year || '']
    );

    res.status(201).json({ message: 'Added to watch history.' });
  } catch (error) {
    console.error('AddToHistory Error:', error);
    res.status(500).json({ error: 'Internal server error adding watch history.' });
  }
};
