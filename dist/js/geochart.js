google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawKRVisualization);

function hangulToISOCode(state) {
	var ret;
	switch(state) {
		case "서울": ret = "KR-11"; break;
		case "부산": ret = "KR-26"; break;
		case "대구": ret = "KR-27"; break;
		case "인천": ret = "KR-28"; break;
		case "광주": ret = "KR-29"; break;
		case "대전": ret = "KR-30"; break;
		case "울산": ret = "KR-31"; break;
		case "경기": ret = "KR-41"; break;
		case "강원": ret = "KR-42"; break;
		case "충북": ret = "KR-43"; break;
		case "충남": ret = "KR-44"; break;
		case "전북": ret = "KR-45"; break;
		case "전남": ret = "KR-46"; break;
		case "경북": ret = "KR-47"; break;
		case "경남": ret = "KR-48"; break;
		case "제주": ret = "KR-49"; break;
		case "세종": ret = "KR-50"; break;
	}
	return ret;
}

function drawKRVisualization() {
	var array = [['State', '확진', '사망']];
	var maxInfected = 0;
	for (var i=0; i<sidoData.length; i++) {
		const state = sidoData[i].state;
		const iso = hangulToISOCode(state);
		const infected = Number(sidoData[i].infected);
		const death = Number(sidoData[i].death);
		// maxInfected = Math.max(maxInfected, infected);
		array.push([{v: iso, f: state}, infected, death]);
	}

	var data = google.visualization.arrayToDataTable(array);
	var opts = {
		region: 'KR',
		displayMode: 'regions',
		resolution: 'provinces',
		sizeAxis: { minValue: 0, maxValue: 0 },
		datalessRegionColor: 'transparent',
		colorAxis: {colors: ['white', 'red', '#654321']}
	};

	var geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
	geochart.draw(data, opts);
}