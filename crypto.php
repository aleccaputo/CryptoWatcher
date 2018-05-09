<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 	<?php include('header.php') ?>
 	<script src="js/crypto.js?v=1"></script>
</head>


<row>
	<div class="col-sm-12">
		<h1 class='ticker-header'>Ticker <span id='coin-market-cap-connection' hidden>Prices unavailable. Check Connection</span></h1>
	</div>
</div>
<div class="container-fluid">
	<div class="row">
		<div class="col-xs-12 col-lg-2">
			<div class="card ticker-prices">
				<div class="card-body">
					<img class="coin-images" src="assets/img/coin-images/btc.png">
					<span class="coin-text">BTC: <br/>$<span id="btc-price"></span></span>
					<!-- get a font awesome up and down arrow for percent -->
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-lg-2">
			<div class="card ticker-prices">
				<div class="card-body">
					<img class="coin-images" src="assets/img/coin-images/eth.png">
					<span class="coin-text">ETH: <br/>$<span id="eth-price"></span></span>
					<a class="detail-view" hidden href="../CryptoWatcher/views/details/eth_detail.php"> </a>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-lg-2">
			<div class="card ticker-prices">
				<div class="card-body">
					<img class="coin-images" src="assets/img/coin-images/zec.png">
					<span class="coin-text">ZEC: <br/>$<span id="zec-price"></span></span>
				</div>
			</div>	
		</div>
		<div class="col-xs-12 col-lg-2"> 	
			<div class="card ticker-prices">
				<div class="card-body">
					<img class="coin-images" src="assets/img/coin-images/burst.png">
					<span class="coin-text">BURST: <br/>$<span id="burst-price"></span></span>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-lg-2">
			<div class="card ticker-prices">
				<div class="card-body">
					<img class="coin-images" src="assets/img/coin-images/neo.jpeg">
					<span class="coin-text">NEO: <br/>$<span id="neo-price"></span></span>
				</div>
			</div>	
		</div>
		<div class="col-xs-12 col-lg-2">	
			<div class="card ticker-prices">
				<div class="card-body">
					<img class="coin-images" src="assets/img/coin-images/req.png">
					<span class="coin-text">REQ: <br/>$<span id="req-price"></span></span>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-lg-2">
			<div class="card ticker-prices">
				<div class="card-body">
					<img class="coin-images" src="assets/img/coin-images/wtc.jpeg">
					<span class="coin-text">WTC: <br/>$<span id="wtc-price"></span></span>
				</div>
			</div>	
		</div>	
	</div>
	<div class="mining-title">
		<h2>Mining</h2>
	</div>
	<div>
		<a class="navigation" href="zcash.html">Zcash</a>
		<br><br>
		<a class="navigation" href="burst.html">BURST</a>	
	</div>
</div>
</html>
