import * as graphing from '../CryptoWatcher/js/graphing.js';

$(document).ready(function(){	
	$('#timeFrame').on('change', function(){
		let timeFrame = $(this).val();
		console.log(timeFrame);
		graphing.getData(timeFrame);
	});

});