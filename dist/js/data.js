function loadData(myLineChart, myBarChart) {
	addLineChartData(myLineChart);
	addSidoBarChartData(myBarChart);
}

function addLineChartData(chart) {
	$.getJSON('data/dateData.json', function (data) {
		var prevInfectedCnt = 0;
		$.each(data, function (i, item) {
			const date = String(item.date).substring(5, 10);
			const totalInfected = Number(item.infected);
			const newInfectedCnt = totalInfected - prevInfectedCnt;
			prevInfectedCnt = totalInfected;

			chart.data.labels.push(date);
			chart.data.datasets[1].data.push(totalInfected);
			chart.data.datasets[0].data.push(newInfectedCnt);
		});
		chart.update();
	});
}

function addSidoBarChartData(chart) {
	$.getJSON('data/todaySidoData.json', function (data) {
		$.each(data, function (i, item) {
			const state = item.state;
			var sidoSum = Number(item.infected);

			const idx = chart.data.labels.indexOf(state);
			const val = (chart.data.datasets[0].data[idx] == undefined) ? 0 : chart.data.datasets[0].data[idx];
			sidoSum += val;
			chart.data.datasets[0].data[idx] = sidoSum;
		});
		chart.update();
	}).done(function(data) {
		sidoData = data;
	});
}