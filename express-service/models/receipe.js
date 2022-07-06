const mongoose=require('mongoose');

const SubMenuSchema= new mongoose.Schema({
    type:{
        type:String,
        required:true
    }
});

module.exports=Receipe=mongoose.model('receipe',ReceipeSchema);