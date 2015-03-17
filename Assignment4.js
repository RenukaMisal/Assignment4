var abc=require('./ReadJson.js');
var ReadSort=require('./SortedTxt.js');
var ReadXml=require('./SortedXml.js');
var ReadUnsorted=require('./UnsortedTxt.js');
var ReadUnsortedXml=require('./UnsortedXml.js');

var http= require("http");
var fs= require("fs");
var url=require("url");
var json=abc.read();

var server=http.createServer(function(request, response){

	var string= request.url;
	var array=string.split("=");
	var qstring=array[1];
	if(request.method!='GET'){
		
		response.writeHead(404,{"Content-type":"text/html"});
		response.write("Error method type NOT supported");
		response.end();
		return;
	}
	response.writeHead(200,{"Content-type":"text/html"});
	var reqAccept=JSON.stringify(request.headers.accept);
	if(qstring==undefined){

  		if(reqAccept== '"xml"')
  			response.write(ReadUnsortedXml.unsortedXml(json));
  		else
  			if(reqAccept== '"json"')
  				response.write(JSON.stringify(json));
  			else
  				if(reqAccept== '"text"'){
		    		var array=(ReadUnsorted.unsortedTxt(json));
					for (var i = 0; i <= array.length - 1; i++) {
						response.write(array[i]);
						response.write("\n");
					};
		    	}
		    	else{
		    		response.writeHead(404,{"Content-type":"text/html"});
					response.write("Error accept type NOT supported");
					response.end();
					return;
		    	}
    	response.end();
  		return;
  	}
	else{
			var result=search(qstring);
			if(!result){
				response.writeHead(404,{"Content-type":"text/html"});
				response.write("Error entered student NOT exists in record");
			  	response.end();
				return;
			}

			if(reqAccept== '"xml"')
				response.write(ReadXml.sortedXml(json));
			else
				if(reqAccept=='"json"')
				response.write(JSON.stringify(abc.sortJson()));
			else
				if(reqAccept=='"text"'){
					var array=(ReadSort.sortTxt(json));
					for (var i = 0; i <= array.length - 1; i++) {
						response.write(array[i]);
						response.write("\n");
					}
				}
				else{
		    		response.writeHead(404,{"Content-type":"text/html"});
					response.write("Error accept type NOT supported");
					response.end();
					return;
				}
				response.end();
	}
});
server.listen(8080);

var search=function(qstring){

	for (var i = 0; i <=json.students.length-1 ; i++) {

		regex = new RegExp('^' + qstring + '$', 'i');
		if(regex.test(json.students[i].fName) || regex.test(json.students[i].lName))
			return true;
	}
};