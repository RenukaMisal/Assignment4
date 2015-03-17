//getting students json object

var fs = require('fs');	

//getting jstoxml module 
var xml=require("jstoxml");		

var SortedTxt=function(){
};

SortedTxt.prototype.sortTxt=function(student){
	try{
			//sorting function for sorting by id
			function sortById(x,y)
			{
				return x.id-y.id;
			}
			// fs.appendFile('stud.txt',"\n"+"after sorting"+"\n");
 		 	student.students.sort(sortById);
 		 	var array=new Array;
			for (var i = 0; i <=student.students.length-1 ; i++){
				array[i]=((student.students[i].id)+"|"+(student.students[i].fName)+"|"+(student.students[i].lName)+"|"+(student.students[i].score));		//logic for witing into file in the same formate
				//console.log(array);
				}
				console.log(array);
				return array;


			// fs.writeFile('Sorted.txt',"First Name | Last Name | Score"+"\n");

			// for (var i = 0; i <=student.students.length-1 ; i++) {
			// 	// console.log(student.students[i].id);
			// 	var data=(student.students[i].id)+"|"+(student.students[i].fName)+"|"+(student.students[i].lName)+"|"+(student.students[i].score)+"\n";		//logic for witing into file in the same formate
			
			// 	fs.appendFile('stud.txt', data, function (err) {
	  //    			if (err) throw err;
	  //    			//console.log('Its saved! in same location.');
   // 	 			});
   // 	 			;
			// };

			// var txt=fs.readFileSync('stud.txt');
			// console.log(new Buffer(txt).toString());
   //  		return(new Buffer(txt).toString());
 		}
		
		catch(e){

			console.error("file not found");
			process.exit(e.code);
		}
};
module.exports=new SortedTxt();
