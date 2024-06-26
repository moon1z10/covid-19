// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: [],
		datasets: [{
			label: "Per day",
			lineTension: 0.3,
			backgroundColor: "rgba(2,117,216,0.8)",
			borderColor: "rgba(2,117,216,1)",
			pointRadius: 5,
			pointBackgroundColor: "rgba(2,117,216,1)",
			pointBorderColor: "rgba(255,255,255,0.8)",
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(2,117,216,1)",
			pointHitRadius: 50,
			pointBorderWidth: 2,
			data: [],
			order: 1
		}, {
			label: "Total",
			backgroundColor: "rgba(100,0,100,0.2)",
			borderColor: "rgba(100,0,100,1)",
			pointRadius: 5,
			pointBackgroundColor: "rgba(100,0,100,1)",
			pointBorderColor: "rgba(255,255,255,0.8)",
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(100,0,100,1)",
			pointHitRadius: 50,
			pointBorderWidth: 2,
			data: [],
			type: 'line',
			order: 2
		}],
	},
	options: {
		scales: {
			xAxes: [{
				time: {
					unit: 'date'
				},
				gridLines: {
					display: false
				},
				ticks: {
					maxTicksLimit: 7
				}
			}],
			yAxes: [{
				ticks: {
					min: 0,
					//max: 100,
					maxTicksLimit: 5
				},
				gridLines: {
					color: "rgba(0, 0, 0, .125)",
				}
			}],
		},
		legend: {
			display: false
		}
	}
});