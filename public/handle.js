$(document).ready(function() {
	
	//alert("hello");
	// SUBMIT FORM
    $("#Form").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		//alert($("#name").val());
		ajaxPost();
	});
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		name : $("#name").val(),
    		type :  $("#type").val(),
    		no :  parseInt($("#no").val())
    	}
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			headers:{"Content-Type":"application/x-www-form-urlencoded"},
			url : 'http://localhost:8585/one/create',
			data : formData,
			//dataType : 'json',
			error : function(e){
				alert("Errorrrrr!");
				console.log("ERROR: ", e);
			},
			success : function(data,status){
				alert(data);
			}
		});
    	// Reset FormData after Posting
    	resetData();

    }
    
    function resetData(){
    	$("#name").val("");
    	$("#type").val("");
    	$("#no").val("");
    }
});