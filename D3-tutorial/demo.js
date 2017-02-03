var width = 700;
	height = 500;

var svg =  d3.select("#canvas")
		.attr("width", width)
		.attr("height", height)

/*
	typed: python -m http.server to create a local server
	open webpage on localhost:8000
	https://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local#
*/

// real data via public API.

d3.json("data.json", function(data) {

	var scale = d3.scaleLinear()
		.domain([1, 200])
		.range([20, width - 40]);

	var scaleOp = d3.scaleLinear()
		.domain([1, 200])
		.range([0, 1]);

	var color = d3.scaleLinear()
		.domain([1, 200])
		.range(["red", "purple"]);

	var circle = svg.selectAll("circle")
			.data(data)
			.enter()
			.append("circle");

	circle
		.attr("cx", function(d){
			return scale(d);
		})
		.attr("cy", 200)
		.attr("r", 40)
		.attr("fill", function(d){
			return color(d);
		})
		.attr("fill-opacity", 0.5)
		.on("mouseover", function(d){
			d3.select(this)
				.attr("fill-opacity", 1);
		})
		.on("mouseout", function(d){
			d3.select(this)
				.attr("fill-opacity", 0.5);
		});
});
