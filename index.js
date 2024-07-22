const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const express = require('express');
const app = express();


app.get('/template', (req, res) => {
    const htmlFilePath = path.join(__dirname, 'plantilla.html');
    const htmlTemplate = fs.readFileSync(htmlFilePath, 'utf8');
    const comprobante = require('./comprobante.json');
    let html = ejs.render(htmlTemplate, { Comprobante: comprobante.Comprobante });

    res.send(html)
});

app.listen(3000, () => console.log("servidor corriendo"));