const express= require('express');
const app=express();
var cors=require('cors');

var corsOptions={
    origin:"http://localhost:3000",
    optionsSuccessStatus:200,
};

//Init Middleware 
app.use(cors(corsOptions));

app
app.get('/',(req,res)=> res.send('API Running'));

const PORT = process.env.port || 3001;

//Define Routes
app.use('/api/menu', require('./routes/api/menu'));
app.use('/api/submenu', require('./routes/api/submenu'));
app.use('/api/receipe', require('./routes/api/receipe'));

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));