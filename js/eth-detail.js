$(document).ready(function(){
	getDayOfData();
	function getDayOfData(){
		let today = moment().startOf('day').format()
		var promise = $.ajax({
			url: "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_ETH_USD/history?period_id=1HRS&time_start="+today,
			headers: {
				"X-CoinAPI-Key":"CB7FF527-26F2-4765-90FF-E04B852B1B01"
			},
			method: "GET",
		});

		promise.done(function(data){
			let closePrices = [];
			let times = [];
			$.each(data,function(){
				closePrices.push(this['price_close']);
				let formattedTime = moment(this['time_period_end']).format("hh:mm:ss a")
				times.push(formattedTime);
			});
			createChart(closePrices,times);
			console.log(data);
			console.log(times);
			//console.log(closePrices);
		});
		promise.fail(function(xhr){
			console.log(xhr);
		});

	}

	function createChart(coinData,times){
	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'line',
	    data: {
	    	labels: times,
	    	datasets:[{
	    		label: "ETH Price Today",
	    		data: coinData,
	    		backgroundColor: "rgb(72, 115, 140)",
	    		
	    	}],
	    },
	    
	});
}
});