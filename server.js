const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About route
app.get('/posts/building-an-api', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'posts', 'building-an-api.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
