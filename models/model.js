const mongoose=require('mongoose');
const db=mongoose.Schema;
let crudDb=new db({
	name: {type:String,required:true},
	jobtype:{type:String,required:true},
	desk:{type:Number,required:true},
});
module.exports=mongoose.model('crud',crudDb);