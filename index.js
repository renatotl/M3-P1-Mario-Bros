const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/characters.route')


app.use(express.json());
app.use('/characters', route);
app.use(cors());   

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



