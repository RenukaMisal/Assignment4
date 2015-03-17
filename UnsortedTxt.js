var fs = require('fs');	

//getting jstoxml module 
var xml=require("jstoxml");		
var UnsortedTxt=function(){
};

UnsortedTxt.prototype.unsortedTxt=function(student){
		try{
			var array=new Array;
			for (var i = 0; i <=student.students.length-1 ; i++){
				array[i]=((student.students[i].id)+"|"+(student.students[i].fName)+"|"+(student.students[i].lName)+"|"+(student.students[i].score));		//logic for witing into file in the same formate
				//console.log(array);
				}
				return array;

			// fs.writeFile('stud.txt',"First Name | Last Name | Score"+"\n");

			// for (var i = 0; i <=student.students.length-1 ; i++) {
			// 	// console.log(student.students[i].id);
			// 	var data=(student.students[i].id)+"|"+(student.students[i].fName)+"|"+(student.students[i].lName)+"|"+(student.students[i].score)+"\n";		//logic for witing into file in the same formate
			
			// 	fs.appendFile('UnsortedTxt.txt', data, function (err) {
	     
	  //    			if (err) throw err;
	  //    			//console.log('Its saved! in same location.');
   // 	 			});
			// };
			
			// var txt=fs.readFileSync('UnsortedTxt.txt');
			// console.log(txt);
   //  		return(new Buffer(txt).toString());
   //  		//response.end('" /></html>');
      
			}
		catch(e){
			console.error("file not found");
			process.exit(e.code);
		}
};

//exportsing our own class object
module.exports=new UnsortedTxt();