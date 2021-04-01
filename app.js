const express = require("express");
const path = require("path");
const normalUser = require("./routes/users/normalUser");
const port = 80;
const hostname = '127.0.0.1';

const app = express();
app.use('/', normalUser);
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded())

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});

app.post('*', (req, res) => {
    let url = {
        url: `${hostname}:${port}${req.url}`
    }
    res.status(404).render('notfound.pug', url);
});

app.listen(port, () => {
    console.log(`Website has been succesfully started. URL: http://127.0.0.1:${port}`);
});
