const express = require('express');
const app = express();
app.use()
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, () => {
    console.log("Server is live on 8080");
})