const express = require("express")
const app = express()
const port = 5000 

app.use(express.static("public"));

const date = new Date();
const day = date.getDay();
const hours = date.getHours();


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    if (day>=1 && day<=5 && hours>=18 && hours<=18){
        res.render('Home')
    } else {
            res.render('error')
    }
});

app.get('/Contact', (req,res) => {
    res.render('Contact')
});

app.get('/Service', (req,res) => {
    res.render('Service')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:5000`);
});