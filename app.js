const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from AWS EC2!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on port ${PORT}`);
});
