const express = require('express');
const app = express();

app.get('/order', (req, res) => {
    res.send('Get order response')
});

app.post('/order', (req, res) => {
    res.send('Post order response')
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});