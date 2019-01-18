const instance=require('../models/model');

exports.test=function(req,res){
	res.send('INMESSIONANTE');
};
//create operation
let temp,t;
exports.create=function(req,res){
	let instanceone=new instance(
		{
			name:req.body.name,
			jobtype:req.body.type,
			desk:req.body.no
		});
	instanceone.save(function(err){
		if(err){return next(err);}
		res.send('data instance added');
	});
};
//read operation
exports.read=function(req,res){
	t=req.body.name;
	temp={name:t};
	instance.find(temp,function(err,userdata){
		if(err){return next(err);}
		res.send(userdata);
	});
};
//update operation
exports.update=function(req,res){
	t=req.body.find_name;
	temp={name:t};
	instance.findOneAndUpdate(temp,
		{$set:{name:req.body.name,
			jobtype:req.body.type,
			desk:req.body.no}},function(err,data){
		if(err){return next(err);}
		res.send("value updated");
	});
};
//delete operation
exports.delete=function(req,res){
	t=req.body.name;
	temp={name:t};
	instance.findOneAndDelete(temp,function(err,data){
		if(err){return next(err);}
		res.send("document deleted");
	});

};