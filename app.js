const express = require('express');
const app = express();

const port = process.env.PORT || 8675;

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());


app.listen(port, ()=> {
    console.log(`The current port that is working is ${port}`);
});

app.get('/',(req,res)=> {
    
})