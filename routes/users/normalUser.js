const express = require('express');

const app = express.Router();

app.get('/users/normal', (req, res) => {
    res.status(200).render('Normal User/index.pug');
});

app.post('/users/normal/birthday-website/template1', (req, res) => {
    res.status(200).render('Normal User/templates/template1.pug');
});

app.post('/users/normal/birthday-website/template2', (req, res) => {
    res.status(200).render('Normal User/templates/template2.pug');
});

app.post('/users/normal/birthday-website/template3', (req, res) => {
    res.status(200).render('Normal User/templates/template3.pug');
});

app.post('/users/normal/birthday-website/template4', (req, res) => {
    res.status(200).render('Normal User/templates/template4.pug');
});

app.post('/users/normal/birthday-website/template5', (req, res) => {
    res.status(200).render('Normal User/templates/template5.pug');
});

module.exports = app;