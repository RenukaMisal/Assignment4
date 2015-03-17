var fs = require('fs');	

//getting jstoxml module 
var xml=require("jstoxml");		

//creating a class called Json.
var SortedXml=function (){
};

SortedXml.prototype.sortedXml=function(student){
		
		var student=student;
		//sorting function for sorting by id
		function sortByScore(x,y)
		{
			return x.score-y.score;
		}

		var conversion=xml.toXML( student.students.sort(sortByScore),{header: false, indent: '  '});
		console.log(conversion);
		return(conversion);
		// try{
		// 	//console.log("in sorted xml");
		// 	fs.writeFile('SortedXml.xml','Conversion from json onject to xml'+"\n"+conversion,function (err) {
	     
	 //     			if (err) throw err;
	 //     			//console.log('Its saved! in same location.');
  //  	 			});
		// 	}
		// catch(e){
				
		// 	console.log("Error"+e);

		// 	}
};

//Creatig an object of class created 
var json1=new SortedXml();
module.exports=json1;
