export function getData(time){
	//todo period == interval on graph, start time is what i meant the selector to be. swithc and change values based on that
	let today = moment().startOf('day').format();
	var promise = $.ajax({
		url: "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_ETH_USD/history?period_id="+time+"&time_start="+today,
		headers: {
			"X-CoinAPI-Key":"CB7FF527-26F2-4765-90FF-E04B852B1B01"
		},
		method: "GET",
	});

	promise.done(function(data){
		$('#graph-load-spinner').hide();
		let closePrices = [];
		let times = [];
		$.each(data,function(){
			closePrices.push(this['price_close']);
			let formattedTime = moment(this['time_period_end']).format("hh:mm:ss a");	
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

export function createChart(coinData,times){
var ctx = document.getElementById("eth-chart").getContext('2d');
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

