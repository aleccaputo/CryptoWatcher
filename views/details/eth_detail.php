<?php include('header.php'); ?>
<!DOCTYPE html>
<html>
	<div class="row">
		<div class="col-xs-12 col-lg-9">
			<div class="graph-window">
				<canvas id="eth-chart" width="450" height="225"></canvas>
				<i id="graph-load-spinner" class="fas fa-circle-notch fa-spin fa-5x"></i>
			</div>
		</div>
		<div class="col-xs-12 col-lg-3">
			<h1>Info</h1>
			<div class="form-group">
				<label for="timeFrame">Select A Time</label>
			    <select class="form-control" id="timeFrame">
			      <option value="1HRS">1 Hour</option>
			      <option value="12HRS">12 Hours</option>
			      <option value="1DAY">1 Day</option>
			      <option values="7DAY">7 Days</option>
			      <option value="1MNTH">1 Month</option>
	    		</select>
			</div>
		</div>
	</div>
</html>
<script src="../../js/eth-detail.js"></script>
