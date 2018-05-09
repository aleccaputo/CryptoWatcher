$(document).ready(function(){
	//entry point. API call.
	getTickerPrices();

	function getTickerPrices(){
		console.log("here");
		//coinmarketcap api call here.
		$.get("https://api.coinmarketcap.com/v1/ticker/bitcoin", function(data){
			populateBitcoinInfo(data[0]);
		})
		.fail(function(){
			coinMarketUnreachable();

		});
		$.get("https://api.coinmarketcap.com/v1/ticker/ethereum", function(data){
			populateEthInfo(data[0]);
		})
		.fail(function(){
			coinMarketUnreachable();

		});
		$.get("https://api.coinmarketcap.com/v1/ticker/zcash", function(data){
			populateZcash(data[0]);
		})
		.fail(function(){
			coinMarketUnreachable();

		});
		$.get("https://api.coinmarketcap.com/v1/ticker/burst", function(data){
			populateBurst(data[0]);
		})
		.fail(function(){
			coinMarketUnreachable();

		});
		$.get("https://api.coinmarketcap.com/v1/ticker/NEO", function(data){
			populateNeo(data[0]);
		})
		.fail(function(){
			coinMarketUnreachable();

		});
		$.get("https://api.coinmarketcap.com/v1/ticker/request-network", function(data){
			populateREQ(data[0]);
		})
		.fail(function(){
			coinMarketUnreachable();

		});
		$.get("https://api.coinmarketcap.com/v1/ticker/walton", function(data){
			populateWalton(data[0]);
		})
		.fail(function(){
			coinMarketUnreachable();

		});

	}

	function populateBitcoinInfo(data){
		console.log(data.price_usd);
		$('#btc-price').text(data.price_usd);
	}
	function populateEthInfo(data){
		console.log(data.price_usd);
		$('#eth-price').text(data.price_usd);
	}
	function populateZcash(data){
		console.log(data.price_usd);
		$('#zec-price').text(data.price_usd);
	}
	function populateBurst(data){
		console.log(data.price_usd);
		$('#burst-price').text(data.price_usd);
	}
	function populateNeo(data){
		console.log(data.price_usd);
		$('#neo-price').text(data.price_usd);
	}
	function populateREQ(data){
		console.log(data.price_usd);
		$('#req-price').text(data.price_usd);
	}
	function populateWalton(data){
		console.log(data.price_usd);
		$('#wtc-price').text(data.price_usd);
	}
	

	function populateTickerPrices(data){
		$('#coin-market-cap-connection').attr('hidden',true);
	}

	function coinMarketUnreachable(){
		$('#coin-market-cap-connection').show();
	}

	function percentChange(previousPrice, currentPrice){
		//whatever absolute value is in JS????
		var percentChange = abs(currentPrice-previousPrice);
		percentChange = percentChange/100;
		alert(percentChange);

		return percentChange;
	}

	$('.ticker-prices').click(function(){
		window.location = $(this).find('.detail-view').attr('href');
	});
});