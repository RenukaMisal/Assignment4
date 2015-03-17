var student=require('./Student');
var Read=function(){
};

Read.prototype.read= function() {
	// body...
	try{
			
			for (var i = 0; i <=student.students.length-1 ; i++) {
				//returning a json object to calling area.
				return student;
			}
		}
	catch(e){

			console.error("file not found");
			process.exit(e.code);

		}
};
Read.prototype.sortJson=function(){
	function sortByScore(x,y)
		{
			return x.score-y.score;
		}

	var result=student.students.sort(sortByScore);
	return result;
};

module.exports=new Read();