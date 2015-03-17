var fs = require('fs');	

//getting jstoxml module 
var xml=require("jstoxml");		
var UnsortedXml=function (){
};

UnsortedXml.prototype.unsortedXml=function(student){
		//converting json object into xml
		var conversion=xml.toXML(student.students,{header: false, indent: '  '});
		return conversion;
};
//exporting our own class object.
module.exports=new UnsortedXml();
