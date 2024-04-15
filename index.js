const express = require('express');
const app = express();
const PORT = 7070;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello Racecade Users in the JSON Server!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));