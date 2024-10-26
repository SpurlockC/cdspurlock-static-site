const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/posts/cds-api', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'posts', 'cds-api.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
