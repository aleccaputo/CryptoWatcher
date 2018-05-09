$(document).ready(function(){
	callNanoPoolAPI();
	//call the API every minute
	setInterval(callNanoPoolAPI,60000);
	function callNanoPoolAPI(){
		$.getJSON('https://api.nanopool.org/v1/zec/user/t1T3ZfN7fJNuL8t3FGL33kjELgAZHJuTsCs', 
			function(data){
				var miningStats = data.data;
				var mining = amIMining(data.status,false);
				if(mining)
				{
					populateMiningData(miningStats);	
				}
				else{
					amIMining(false,true);
				}
			})
		.fail(function(){
			amIMining(false,true);
		});
	}

	//is my miner up and running? Fail == API call failed 
	function amIMining(status,fail)
	{
		if(status){
			$('#mining-status').text('Up and running!');
			return true;
		}
		else if(!fail){
			$('#mining-data').hide();
			$('#mining-status').text('WE\'RE DOWN!');
			return false;
		}
		else
		{
			$('#mining-data').hide();
			$('#mining-status').text('There seems to be a problem connecting you to the internet. \n Please check your connection and try again.');
			return false;
		}
	}

	function populateMiningData(miningStats)
	{
		$('#balance').text(miningStats.balance);
		$('#pending-balance').text(miningStats.unconfirmed_balance);
		$('#current-hashrate').text(miningStats.hashrate);
		$('#average-hashrate').text(miningStats.avgHashrate.h24);
	}
});





