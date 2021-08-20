const express = require('express');
const router = require('./src/routes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log("Servidor on na porta 5000")
})
