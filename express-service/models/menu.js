const mongoose=require('mongoose');

const MenuSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

module.exports=Menu=mongoose.model('menu',MenuSchema);