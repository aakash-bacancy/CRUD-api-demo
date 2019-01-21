$(document).ready(function() {
	// SUBMIT FORM
    $("#ins").click(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		//alert($("#name").val());
		insertData();
	});
	$("#search").click(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		//alert($("#name").val());
		searchData();
	});
	$("#delete").click(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		//alert($("#name").val());
		deleteData();
	});
	$("#update").click(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		//alert($("#name").val());
		updateData();
	});
    function insertData(){
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
    function deleteData(){
    	var formData={
    		name: $("#name").val()
    	}
    	$.ajax({
    		type:"DELETE",
    		headers:{"Content-Type":"application/x-www-form-urlencoded"},
			url : 'http://localhost:8585/one/delete',
			data : formData,
			success:function(data,status){
				//alert();
				$("#result").html("<p>" + 
					"below entry deleted! <br>" +
					"--->" + JSON.stringify(data)+ "</p>");
			},
			error : function(e){
				alert("Errorrrrr!");
				console.log(e);
			}
    	});
    	resetData();
    }
    function updateData(){
    	var formData = {
    		name : $("#name").val(),
    		type :  $("#type").val(),
    		no :  parseInt($("#no").val())
    	}
    	// DO POST
    	$.ajax({
			type : "PUT",
			headers:{"Content-Type":"application/x-www-form-urlencoded"},
			url : 'http://localhost:8585/one/update',
			data : formData,
			success : function(data,status){
				console.log(data);
			},
			error : function(e){
				alert("Errorrrrr!");
				console.log("ERROR: ", e);
			}
		});
    	// Reset FormData after Posting
    	resetData();

    }
    function searchData(){
    	// PREPARE FORM DATA
    	var formData = {
    		name : $("#name").val()
    	}
    	// DO POST
    	$.ajax({
			type : "GET",
			dataType:'json',
			headers:{"Content-Type":"application/json"},
			url : 'http://localhost:8585/one/find',
			data : formData,
			success : function(data,status){
				$("#result").html("<p>" + 
					"entery found! <br>" +
					"--->" + JSON.stringify(data)+ "</p>");
			},
			error : function(e){
				alert("Errorrrrr!");
				console.log("ERROR: ", e);
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