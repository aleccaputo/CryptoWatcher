$(document).ready(function(){
	callBurstAPI();
	function callBurstAPI(){
		$.getJSON('https://wallet.burst.cryptoguru.org:8125/burst?requestType=getAccount&account=624533644475887098', 
			function(data){
				console.log(data);
			});
	}
});