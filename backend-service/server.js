const express= require('express');
const app=express();

app.get('/',(req,res)=> res.send('API Running'));

const PORT = process.env.port || 5000;

//Define Routes
app.use('/api/menu', require('./routes/api/menu'));
app.use('/api/submenu', require('./routes/api/submenu'));
app.use('/api/receipe', require('./routes/api/receipe'));

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));