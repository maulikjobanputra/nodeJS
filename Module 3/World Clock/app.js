require('dotenv').config();
const express = require('express');
const app = express();


app.set('view engine','hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('index');
});

app.get('/time', (req, res)=>{

    fetch(`https://api.ipgeolocation.io/timezone?apiKey=${process.env.API_KEY}&location=${req.query.location}`)

    .then(response => response.json())

    .then(result => {
        res.send(result)
    });
})

app.listen(3000, () => {
    console.log('Server running at port 3000!');
});