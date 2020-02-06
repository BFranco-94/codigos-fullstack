


$("#nameFormulary").submit(function(e){

var url = "filesPhp/example.php"; //here you put the path to send information 
var datos = "name="+name+"&lastName="+lastname+"&zipCode="+zipCode; //variables
	console.log(datos);
    $.ajax({
        type:"POST", //method to send dates type 'POST'
        url:url,
        data: datos, //here I get all data from formulary whithout the method serialize
        success: function(data){
					        	
        	$("#result").html(data); //#result is a label kind of <div> to show the answer
 			console.log(data); //show the answer in console
        }
    });
    return false;

});