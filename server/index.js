const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('./client'));

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});

app.get('/posts', (req, res) => {
    res.sendFile('./client/all-posts.html', {root: __dirname })
})