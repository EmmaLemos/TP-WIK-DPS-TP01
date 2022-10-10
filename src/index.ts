import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('This is a test web page!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})

const http = require('http');

const requete = function (req: any, res: any) {
    res.statusCode = 200;
    res.end();
}

const serveur = http.createServer(requete);
serveur.listen(8080);