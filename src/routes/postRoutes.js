const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, title: 'First Blog Post', content: 'This is my first post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is my second post.' },
];

// Get all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Get a specific post by ID
router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports = router;
