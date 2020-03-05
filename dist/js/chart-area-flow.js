// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["1.20", "1.24", "1.26", "1.27", "1.30", "1.31", "2.1", "2.2", "2.4", "2.5", "2.6", "2.9", "2.10"],
		datasets: [{
			label: "Sessions",
			lineTension: 0.3,
			backgroundColor: "rgba(2,117,216,0.2)",
			borderColor: "rgba(2,117,216,1)",
			pointRadius: 5,
			pointBackgroundColor: "rgba(2,117,216,1)",
			pointBorderColor: "rgba(255,255,255,0.8)",
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "rgba(2,117,216,1)",
			pointHitRadius: 50,
			pointBorderWidth: 2,
			data: [1, 2, 3, 4, 7, 11, 12, 15, 16, 21, 24, 27, 28],
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

$.getJSON('data/data.json', function (data) {
	$.each(data, function (i, item) {
		myLineChart.data.labels.push(item.date);
		var infectSum = 0;
		item.infectData.forEach(element => {
			infectSum += element;
		});
		myLineChart.data.data.push(infectSum);
	});
});