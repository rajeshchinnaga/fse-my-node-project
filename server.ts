import express from 'express';
const app = express();

app.get('/rajesh', (req,res)=>
    res.send('Rajesh First Node Server Application'));

const PORT = 4000;
app.listen(PORT);