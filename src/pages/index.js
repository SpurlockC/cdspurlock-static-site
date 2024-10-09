const express = require('express');
const app = express();
const PORT = 3000;

const posts = [
    { id: 1, title: 'Best Practices for Using APIs in React', content: 'Lorem ipsum...' },
    { id: 2, title: 'Building an API with Express', content: 'Lorem ipsum...' },
    { id: 3, title: 'Deploying APIs with Netlify Functions', content: 'Lorem ipsum...' },
];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
