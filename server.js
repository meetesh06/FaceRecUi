const express = require('express');
const app = express();

const PORT = 7770;
const HOST = '0.0.0.0';

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, HOST, () => {
    console.log("Server is live on http://"+HOST+":"+PORT);
})