function cab(){
	console.log('active');
	var pick = $("#pickup").val();
	var drop = $("#drop").val();
	var cab = $("#cabtype").val();
	if(cab =='CedMicro'){
		$('#luggage').attr("disabled",true);
		alert("luggage facility is not available for micro");
	}
	else{
		$('#luggage').attr("disabled",false);
	}
}

function calculate(){
	var pickup = $("#pickup").val();
	var destination = $("#drop").val();
	var cedcab = $("#cabtype").val();
	var weights = $("#luggage").val();
	if(pickup==destination){
		alert("Pickup and drop location cannot be same");
		return;
	}
	if(cedcab=="Select-Cab-Type"){
		alert("Select your cab");
		return;
	}
	if(weights==''){
		alert('Your final baggage would be 0 Kgs');
		$("#luggage").val(0);

	}
	console.log(pickup);
	console.log(destination);
	console.log(cedcab);
	console.log(weights);
	$.ajax({
			url:'cedcab.php',
			type: 'POST',
			data:{from:pickup,to:destination,cab:cedcab,baggage:weights},
			success: function(result){
				var path=result;
				path=result.split(',');
				console.log(path);
				$('.distance').html('Total distance is '+ path[0]);
				$('.fare').html('Total fare is '+ path[1]);


			},
			error: function(){
				alert("notreceived");
			}
		});
}
function onlynumber(button) { 
	var code = button.which;
    if (code > 31 && (code < 48 || code > 57)) 
        return false; 
    return true; 
} 



