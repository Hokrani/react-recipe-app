const mongoose=require('mongoose');

const SubMenuSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

module.exports=SubMenu=mongoose.model('submenu',SubMenuSchema);