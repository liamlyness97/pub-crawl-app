const express = require('express');
const pgp = require('pg-promise')();

const app = express();

const PORT = 3000;

const db = pgp(`postgres://postgres:2A4pGxzvEviTLcB8@db.pdsgzgsxkuptedbgckud.supabase.co:5432/postgres`);

db.any('SELECT * FROM users')
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    });

app.use(express.static('./client'));

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});

app.get('/posts', (req, res) => {
    res.sendFile('./client/all-posts.html', {root: __dirname })
})