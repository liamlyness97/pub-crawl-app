const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});

app.get('/posts', (req, res) => {
    res.send(console.log('Posts page'))
})